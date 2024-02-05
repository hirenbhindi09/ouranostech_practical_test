import Button from "react-bootstrap/Button";
import React, { Children, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LeadsHomePage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const headers = { Authorization: `Bearer ${token}` };

    axios
      .get("https://practical.ouranostech.com/api/lead/get", { headers })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("error :--", err);
        navigate("/login");
      });
  };
  // console.log("DATA:-", data);
  return (
    <div
      className="user d-flex flex-column justify-content-center align-items-center bg-light vh-100"
      style={{ width: "83vw" }}
    >
      <h1>List of Leads</h1>
      <div
        className="w-75 rounded bg-white border shadow p-4 "
        style={{ maxHeight: "80vh" }}
      >
        <div className="d-flex justify-content-end ">
          <Link to="/createuser" className="btn btn-success">
            Add Lead
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.lead?.map((d, i) => (
              <tr key={i}>
                <td>{d.contact_name}</td>
                <td>{d.designation}</td>
                <td>{d.email}</td>
                <td>{d.mobile_no}</td>
                <td>
                  <Link to={`/leaddetail`} className="btn btn-info btn-sm me-2">
                    View
                  </Link>
                  <Link className="btn btn-primary btn-sm me-2">Edit</Link>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsHomePage;
