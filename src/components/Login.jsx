import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_Img from "./Sign_Img";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [data, setData] = useState([]);
  const [inpVal, setInpVal] = useState({
    email: "",

    password: "",
  });
  const navigate = useNavigate();
  const getData = (e) => {
    const { value, name } = e.target;
    setInpVal(() => ({
      ...inpVal,
      [name]: value,
    }));
  };

  const addData = async (e) => {
    e.preventDefault();
    const getUserArray = localStorage.getItem("token");
    const { email, password } = inpVal;

    if (email === "" || password === "") {
      alert("Fields are required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else {
      try {
        // Make a POST request to the login API
        const response = await axios.post(
          "https://practical.ouranostech.com/api/login",
          {
            email_or_mobile: email,
            password,
            device_id: "",
            device_type: "",
            fcm_token: "",
          }
        );

        const token = response.data.data.user_token;
        console.log("TOKEN:-", response.data.data.user_token);
        localStorage.setItem("token", token);

        alert("Login successful!");
        navigate("/allusers");
      } catch (error) {
        console.error(
          "Error during login:",
          error.response?.data || error.message
        );
        alert("Login failed. Please check your credentials and try again.");
      }
    }
  };

  return (
    <div className="container mt-3">
      <section className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Login</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                type="text"
                placeholder="Username"
                name="email"
                onChange={getData}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={getData}
              />
            </Form.Group>

            <Button
              style={{ backgroundColor: "rgba(67 , 185, 127)" }}
              type="submit"
              className="col-lg-6"
              onClick={addData}
            >
              Submit
            </Button>
          </Form>
          <p className="mt-3">
            Create new account ?
            <span>
              <Link to="/register">Register</Link>
            </span>{" "}
          </p>
        </div>
        <div className="right_data mt-5">
          <Sign_Img />
        </div>
      </section>
    </div>
  );
};

export default Login;
