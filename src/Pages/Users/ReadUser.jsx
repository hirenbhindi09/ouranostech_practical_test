import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ReadUser = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    // axios
    // .get("http://localhost:3000/users/" + id)
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log("error :--", err));
  }, []);
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
        <h3>Details of the User</h3>

        <div className="mb-2 textColor">
          <strong style={{ color: "black" }}>
            Name : <span className="textColor">{data?.name}</span>
          </strong>
        </div>
        <div className="mb-2">
          <strong>
            Email : <span className="textColor">{data?.email}</span>
          </strong>
        </div>
        <div className="mb-2">
          <strong>
            Phone : <span className="textColor">{data?.phone}</span>
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

export default ReadUser;
