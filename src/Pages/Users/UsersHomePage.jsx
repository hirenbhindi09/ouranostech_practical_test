import Button from "react-bootstrap/Button";
import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const UsersHomePage = () => {
  return (
    <div
      className="user d-flex flex-column justify-content-center align-items-center bg-light vh-100"
      style={{ width: "83vw" }}
    >
      <h1>List of Users</h1>
      <div
        className="w-75 rounded bg-white border shadow p-4 "
        style={{ maxHeight: "80vh" }}
      >
        <div className="d-flex justify-content-end ">
          <Link to="/adduser" className="btn btn-success">
            Add User
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {data?.map((d, i) => ( */}
            {/* <tr key={i}> */}
            <tr>
              <td>1</td>
              <td>hiren</td>
              <td>hiren@gmail.com</td>
              <td>909090909</td>
              <td>
                <Link
                  // to={`/readuser/${d.id}`}
                  className="btn btn-info btn-sm me-2"
                >
                  View
                </Link>
                <Link
                  // to={`/updateuser/${d.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  // onClick={() => handleDelete(d.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
        <div className="pagination">
          <button
            className="btn btn-light"
            // disabled={currentPage === 1}
            // onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {/* {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`btn btn-light mx-1 ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))} */}
          <button
            className="btn btn-light"
            // disabled={currentPage === totalPages}
            // onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersHomePage;
