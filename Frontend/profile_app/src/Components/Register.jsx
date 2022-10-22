import React from "react";
import { useState } from "react";
import axios from "axios";
import FormData from 'form-data'
import { Button, Heading, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../Styled/form.module.css";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    mobile: "",
    password: "",
    image: "",
  });

 
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
     
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleFile = (e) =>{

    setUserDetails({...userDetails, image : e.target.files[0]})
  }

  const handleRegister =  async(e) => {

    e.preventDefault();
    
    const myForm = new FormData()
   const {name, password, mobile, image} = userDetails
    
     myForm.set('name' , name);
     myForm.set('password' , password);
     myForm.set('mobile' , mobile);            
     myForm.set('image' , image);            
   
    try {
      let response = await axios.post(
        "https://obscure-stream-28310.herokuapp.com/user/signup",
        myForm
      
      );
      let username = response?.data?.newUser.uniqueId;

      alert(`your username is ${username}`)
      navigate('/login')
    } catch (error) {
      console.log(error);
      alert("Error in Register");
    }
  };

  return (
    <div className={styles.container}>
      <Heading size={"md"}>Register</Heading>
      <form
        onSubmit={handleRegister}
       
        encType="multipart/form-data"
      >
        <div className={styles.row}>
          <div className={styles.label_column}>
            <label className={styles.label}>Name</label>
          </div>
          <div className={styles.input_column}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your name.."
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label_column}>
            <label className={styles.label}>Mobile</label>
          </div>
          <div className={styles.input_column}>
            <input
              className={styles.input}
              type="number"
              placeholder="Enter your email id.."
              name="mobile"
              value={userDetails.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label_column}>
            <label className={styles.label}>Password</label>
          </div>
          <div className={styles.input_column}>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter your password.."
              name="password"
              value={userDetails.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label_column}>
            <label className={styles.label}>Profile Picture</label>
          </div>
          <div className={styles.input_column}>
            <input
              className={styles.input}
              type="file"
              name="image"
              onChange={handleFile}
             required
            />
          </div>
        </div>

        <div className={styles.row}>
          <input className={styles.submit} type="submit" value="Register" />
        </div>
        <div className={styles.row}>
          <p style={{ margin: "10px" }}>Already Registered</p>
          <br />
          <Button style={{ margin: "10px" }}>
            <Link to="/login">Go to Login</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
