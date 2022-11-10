import { useEffect, useState } from "react";
import React, { Component }  from 'react';
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const{empid }= useParams();

  const[empdata, empdatachange] = useState({});

  useEffect(()=> {
    fetch("http://localhost:8000/employee/" +empid).then((res)=>{
        return res.json();
    }).then((resp)=>{
        empdatachange(resp);
    }).catch((err)=>{
        console.log(err.message);
    })
},[]);
  return (

<div><div className="detailspg">
{/* <div className="row">
    <div className="offset-lg-3 col-lg-6"> */}

   <div className="container">
    
<div className="card row">
    <div className="card-title">
        <h2>Maintenance Details</h2>
    </div>
    <div className="card-body"></div>

    {empdata &&
        <div style={{ "textAlign": "left" }}>
            <h2>The Maintenance ID : {empdata.id}</h2>
            <h5><b>Name :</b> {empdata.name}</h5>
            <h5><b>Date is</b> : {empdata.date}</h5>
            <h5><b>Time is :</b> {empdata.time}</h5>
            <h5><b>Equipment is :</b> {empdata.equipment}</h5>
            <h5><b>Type Of Maintenance : </b>{empdata.typeofmaintenance}</h5>
            <h5><b>Cost of Maintenance :</b> {empdata.costofmaintenance}</h5>
            <Link className="btn btn-danger" to="/home">Back to Listing</Link>
        </div>
    }
</div>
</div>
</div>
{/* </div>
</div> */}
</div >
  );
}
 
export default EmpDetail;