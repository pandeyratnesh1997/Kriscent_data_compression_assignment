import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Heading, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "../Styled/form.module.css";
import { getprofile } from "../Redux/action";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      password,
    };


    try {
      let response = await axios.post(
        "http://localhost:5000/user/login",
        payload
      );
      
      dispatch(getprofile(response.data.user));
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Error in logged in please login  again");
    }
  };

  return (
    <div className={styles.container}>
      <Heading size={"md"}>Login</Heading>
      <form onSubmit={handleLogin}>
        <div className={styles.row}>
          <div className={styles.label_column}>
            <label className={styles.label}>Username</label>
          </div>
          <div className={styles.input_column}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your username.."
              value={username}
              onChange={(e) => setUserName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <input className={styles.submit} type="submit" value="Login" />
        </div>
        <div className={styles.row}>
          <p style={{ margin: "10px" }}>Don't have account</p>
          <br />
          <Button style={{ margin: "10px" }}>
            <Link to="/register">Go to Register</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
