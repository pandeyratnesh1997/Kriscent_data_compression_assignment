const { Router } = require("express");
const multer = require("multer");
const fs = require("fs");
const sharp = require("sharp");
const CryptoJS = require("crypto-js");
require("dotenv").config();

const CounterModel = require("../Model/Counter.model");
const UserModel = require("../Model/User.model");

const UserController = Router();

// image upload using multer module

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
fs.access("../Data/images", async (err) => {
  if (err) {
    fs.mkdirSync("../Data/images");
  }
});

UserController.post("/signup", upload.single("image"), async (req, res) => {
  const { name, mobile, image, password } = req.body;

  // Image Compression using 'sharp' module.

  await sharp(req.file.buffer)
    .rotate()
    .resize(400)
    .toFile(`../Data/images/${new Date().getTime()}-${req.file.originalname}`);

  // creating uniqueId following given instructions in problem statement.
  /*
     condition : Unique ID Pattern: First 2 character of the name,
   last 4 digits of password and an incremented number of 3 digits.
*/
  CounterModel.findOneAndUpdate(
    { id: "counter" },
    { $inc: { sequence: 1 } },
    { new: true },
    (err, cd) => {
      let sequenceId;
      if (cd === null) {
        let newValue = new CounterModel({ id: "counter", sequence: 1 });
        newValue.save();
        sequenceId = 1;
      } else {
        sequenceId = cd.sequence;
      }

      if (sequenceId > 0 && sequenceId < 10) {
        sequenceId = "0" + "0" + String(sequenceId);
      } else if (sequenceId >= 10 && sequenceId < 100) {
        sequenceId = "0" + String(sequenceId);
      } else {
        sequenceId = String(sequenceId);
      }

      console.log(sequenceId);
      const n = password.length;
      const uniqueId =
        name[0] +
        name[1] +
        password[n - 4] +
        password[n - 3] +
        password[n - 2] +
        password[n - 1] +
        sequenceId;

      // Encription of Password using Crypto-js module.

      const cipherPassword = CryptoJS.AES.encrypt(
        password,
        process.env.SECRETKEY
      ).toString();

      const newUser = new UserModel({
        name,
        mobile,
        image,
        password: cipherPassword,
        uniqueId,
      });

      newUser.save();
      res.status(200).send({ message: "signup successfully", newUser });
    }
  );
});

module.exports = UserController;
