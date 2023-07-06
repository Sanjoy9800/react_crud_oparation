import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const getPage = useNavigate();

  //   const header={"Access-Control-Allow-Origin":"*"};

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  //   for whole form submit to get value
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(`name:${name} email:${email}`);

    axios
      .post("https://64a22fb10079ce56e2dba0c6.mockapi.io/crud-oparation", {
        name: name,
        email: email,
        // header
      })

      .then(() => {
        getPage("/read");
      });
  };

  return (
    <>
      <div className="d-flex d-flex justify-content-evenly align-items-center ">
        <h2>Create</h2>
        <Link to={"/read"}>
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>

      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={nameChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={emailChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
