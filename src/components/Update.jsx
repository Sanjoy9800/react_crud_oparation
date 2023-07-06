import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate=useNavigate();

  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
  },[])


  const handelSubmit=(e)=>{
    e.preventDefault()
    axios.put(`https://64a22fb10079ce56e2dba0c6.mockapi.io/crud-oparation/${id}`,{
        name: name,
        email: email
    })
    .then(()=>{
        navigate("/read")
    })
    

  }
  return (
    <>
      <h2>Update</h2>
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>

        <Link to={"/read"}>
            <button className="btn btn-info mx-2">Back</button>
        </Link>
      </form>
    </>
  );
};

export default Update;
