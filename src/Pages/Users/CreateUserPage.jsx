import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  full_name: Yup.string().required("Full name is required"),
  cmpName: Yup.string().required("Company Name is required"),
  user_name: Yup.string()
    .email("Invalid Email address")
    .required("Email address is required !!"),
  contactNo: Yup.string().required("Phone Number is required"),
});
const CreateUser = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Values:", values);

    // axios
    //   .post("http://localhost:3000/users", values)
    //   .then((res) => {
    //     console.log(res);
    //     navigate("/allusers");
    //   })
    //   .catch((err) => console.log("err:-", err));
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
        <h1 className="mb-4">Add User</h1>

        <Formik
          initialValues={{
            full_name: "",
            cmpName: "",
            user_name: "",
            profile_image: "",
            contactNo: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="full_name">Full Name</label>
                <Field
                  type="text"
                  name="full_name"
                  className={`w-100 form-control ${
                    touched.full_name && errors.full_name ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Your Full Name"
                />
                <ErrorMessage
                  name="full_name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cmpName">Company Name</label>
                <Field
                  type="text"
                  name="cmpName"
                  className={`w-100 form-control ${
                    touched.cmpName && errors.cmpName ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Your Company Name"
                />
                <ErrorMessage
                  name="cmpName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="user_name">Email</label>
                <Field
                  type="email"
                  name="user_name"
                  className={`w-100 form-control ${
                    touched.user_name && errors.user_name ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Your Email"
                />
                <ErrorMessage
                  name="user_name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Phone</label>
                <Field
                  type="text"
                  name="contactNo"
                  className={`w-100 form-control ${
                    touched.contactNo && errors.contactNo ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Your Phone Number"
                />
                <ErrorMessage
                  name="contactNo"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="profile_image">Profile Image</label>
                <Field name="profile_image">
                  {({ field }) => (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setFieldValue("profile_image", e.currentTarget.files[0])
                      }
                      className={`w-100 form-control ${
                        touched.profile_image && errors.profile_image
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="profile_image"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <Button variant="primary" className="mt-2" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateUser;
