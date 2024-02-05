import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_Img from "../../components/Sign_Img";
import { Link } from "react-router-dom";
const SignUpPage = () => {
  const [data, setData] = useState([]);
  const [inpVal, setInpVal] = useState({
    user_name: "",
    full_name: "",
    contactNo: "",
    password: "",
    confirm_password: "",
    cmpName: "",
    cmp_address: "",
    cmp_logo: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;
    setInpVal(() => ({
      ...inpVal,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();
    console.log("values :-", inpVal);

    const {
      user_name,
      full_name,
      contactNo,
      password,
      confirm_password,
      cmpName,
      cmp_address,
      cmp_logo,
    } = inpVal;

    if (
      user_name == "" ||
      full_name === "" ||
      contactNo === "" ||
      password === "" ||
      confirm_password === "" ||
      cmpName === "" ||
      cmp_address === ""
    ) {
      alert("fields are required");
    } else if (!user_name.includes("@")) {
      alert("please enter valid email address");
    } else if (password !== confirm_password) {
      alert("Password and confirm password must match");
    } else {
      localStorage.setItem("userValue", JSON.stringify([...data, inpVal]));
    }
  };

  return (
    <div className="container mt-3">
      <section className="d-flex" style={{ justifyContent: "space-between" }}>
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign Up</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="full_name"
                onChange={getData}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                type="text"
                placeholder="Contact Number"
                name="contactNo"
                onChange={getData}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                type="text"
                placeholder="Username"
                name="user_name"
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

            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                onChange={getData}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                type="text"
                placeholder="Company Name"
                name="cmpName"
                onChange={getData}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                type="text"
                placeholder="Company Address"
                name="cmp_address"
                onChange={getData}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6">
              <Form.Control
                name="cmp_logo"
                type="file" // Assuming cmp_logo is a file input
                // onChange={(e) => setCmpLogo(e.target.files[0])}
                // ongetDatafiles[0])}
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
            Already have an account ?
            <span>
              <Link to="/login">Login</Link>
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

export default SignUpPage;
