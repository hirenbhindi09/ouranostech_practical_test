import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const ReadLead = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();
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
  console.log("DATA:-", data?.lead[0]);
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ width: "85vw" }}
    >
      <div
        className=" border bg-white shadow px-5 pt-3 pb-5 rounded "
        style={{
          width: "50vw",
          height: "50vh",
          // padding: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>Details of the Lead</h3>

        <div className="mb-2 textColor">
          <strong style={{ color: "black" }}>
            Name :{" "}
            <span className="textColor">{data?.lead[0].contact_name}</span>
          </strong>
        </div>
        <div className="mb-2">
          <strong>
            Email : <span className="textColor">{data?.lead[0].email}</span>
          </strong>
        </div>
        <div className="mb-2">
          <strong>
            Phone : <span className="textColor">{data?.lead[0].mobile_no}</span>
          </strong>
        </div>

        <div className="mb-2">
          <strong>
            Comany Name :{" "}
            <span className="textColor">{data?.lead[0].cmp_name}</span>
          </strong>
        </div>

        <div className="mb-2">
          <strong>
            City : <span className="textColor">{data?.lead[0].address}</span>
          </strong>
        </div>
        <div className="mt-4">
          <Link to={`/updateuser/${id}`} className="btn btn-success">
            Edit{" "}
          </Link>
          <Link to="/allusers" className="btn btn-primary ms-3">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadLead;
