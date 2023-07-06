import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark]=useState('')


  const toggleChange=()=>{
    if(tabledark==='table-dark'){
      setTableDark('')
    }else{
      setTableDark('table-dark')
    }
  }

  const getData = () => {
    axios
      .get("https://64a22fb10079ce56e2dba0c6.mockapi.io/crud-oparation")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  // function handelDelete(id){
  //     axios.delete(`https://64a22fb10079ce56e2dba0c6.mockapi.io/crud-oparation/${id}`)
  //     .then(()=>{
  //         getData();
  //     })
  // }

  const handelDelete = (id) => {
    axios
      .delete(
        `https://64a22fb10079ce56e2dba0c6.mockapi.io/crud-oparation/${id}`
      )
      .then(() => {
        getData();
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch my-4 mx-4">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={toggleChange}
        />
      </div>
      <div className="d-flex d-flex justify-content-evenly align-items-center ">
        <h2>Read Oparation</h2>
        <Link to={"/"}>
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>

      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
            <tr key={datas.id}>
              <th scope="row">{datas.id}</th>
              <td>{datas.name}</td>
              <td>{datas.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn-success"
                    onClick={() =>
                      setToLocalStorage(datas.id, datas.name, datas.email)
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => handelDelete(datas.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
