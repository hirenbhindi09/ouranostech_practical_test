import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  //to fetch the detail of sppecific user with referene to it's ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log("err:", err));
  }, [id]);

  // update the user
  const handleUpdate = (values) => {
    axios
      // .put(`http://localhost:3000/users/${id}`, values)
      .then(() => {
        setData(values);
        navigate("/allusers");
      })
      .catch((err) => console.log("err:", err));
  };

  return (
    <div
      style={{
        width: "83vw",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="border bg-white shadow p-8 rounded"
        style={{
          width: "50vw",
          padding: "50px",
        }}
      >
        <h1 className="mb-4">Update User</h1>

        <Formik
          initialValues={{
            name: data.name || "",
            email: data.email || "",
            phone: data.phone || "",
            password: "",
            confirmPassword: "",
          }}
          enableReinitialize={true}
          onSubmit={handleUpdate}
        >
          {({ errors, touched, values, setValues }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  name="name"
                  className={`w-100 form-control ${
                    touched.name && errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Your Name"
                  value={values?.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  className={`w-100 form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Your Email"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone">Phone</label>
                <Field
                  type="text"
                  name="phone"
                  className={`w-100 form-control ${
                    touched.phone && errors.phone ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Your Phone Number"
                  value={values.phone}
                  onChange={(e) =>
                    setValues({ ...values, phone: e.target.value })
                  }
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className={`w-100 form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Your Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className={`w-100 form-control ${
                    touched.confirmPassword && errors.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder="Confirm Your Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <Button variant="primary" className="mt-2" type="submit">
                Update
              </Button>
              <Link to="/allusers" className="btn btn-danger btn-md mx-4 mt-2">
                Back
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateUser;
