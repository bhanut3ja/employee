import { useEffect, useState } from "react";
import React, { Component }  from 'react';
import { Link, useHistory, useParams } from "react-router-dom";

const EmpEdit = () => {
  const{empid }= useParams();

  //const[empdata, empdatachange] = useState({});

  useEffect(()=> {
    fetch("http://localhost:8000/employee/" +empid).then((res)=>{
        return res.json();
    }).then((resp)=>{
      idchange(resp.id);
      namechange(resp.name);
      datechange(resp.date);
      timechange(resp.time);
      equipmentchange(resp.equipment);
      typeofmaintenancechange(resp.typeofmaintenance);
      costofmaintenancechange(resp.costofmaintenance);
      activechange(resp.isactive);
    }).catch((err)=>{
        console.log(err.message);
    })
},[]);

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [date, datechange] = useState("");
  const [time, timechange] = useState("");
  const [equipment, equipmentchange] = useState("");
  const [typeofmaintenance, typeofmaintenancechange] = useState("");
  const [costofmaintenance, costofmaintenancechange] = useState("");
  const [active, activechange] = useState(true);

  const history=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const empdata={id,name,date,time,equipment, typeofmaintenance,costofmaintenance,active};

      

      fetch("http://localhost:8000/employee/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved Successfully')
        history.push('/home')
      }).catch((err)=>{
        console.log(err.message);
      })
  }
  return ( 
      <div className="editpg">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="edit-container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title" style={{ "textAlign": "center" }}>
                <h2>Maintenance Form Edit</h2>
              </div>
              <div className="card-body" style={{ "textAlign": "left" }}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input required
                        value={name}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => datechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Time</label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => timechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Equipment</label>
                        
                        <select  value={equipment}
                          onChange={(e) => equipmentchange(e.target.value)}
                          className="form-control">
                          <option value="equipment1">Equipment1</option>
                          <option value="equipment2">Equipment2</option>
                          <option selected value="equipment3">Equipment3</option>
                          <option value="equipment4">Equipment4</option>
                        </select>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Type of Maintenance</label>
                          <input value={typeofmaintenance} onChange={(e) => typeofmaintenancechange(e.target.value)}
                          className="form-control"></input>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Cost of Maintenance</label>
                          <input value={costofmaintenance} onChange={(e) => costofmaintenancechange(e.target.value)}
                          className="form-control"></input>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-check">
                          <input
                          checked={active}
                          onChange={(e) => activechange(e.target.checked)}
                            type="checkbox"
                            className="form-check-input"
                          ></input>
                          <label className="form-check-label">I Agree</label>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <button className="btn btn-success" type="submit">
                            save
                          </button>
                          <Link to="/home" className="btn btn-danger">
                            Back
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
}
 
export default EmpEdit;