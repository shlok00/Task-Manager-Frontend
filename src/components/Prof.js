import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Prof.css';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as axios from "axios";

var token = localStorage.getItem('token');
const tkx = JSON.parse(token);

class Prof extends React.Component{
  constructor()
  {
    super()

      this.state = {
        age: null,
        username: null
    }
  }


    handleupdateSubmit = (event) =>
     { event.preventDefault();
       const datauser = {
        username: this.username,
        age: this.age,
        accessToken: tkx.accessToken
       };
     axios.patch('/user',datauser).then(response=>{
        if(response.status == 200)
        {
          alert('Information Updated!');
        }
       }
     ).catch(error=>{if(error.status != 200){
       alert('Error Encountered!');
       console.log(tkx);
     }});


  }

render(){
  const {age} = this.state;
  const {username} = this.state;
  var email = localStorage.getItem('email');
  var email =  JSON.parse(email);
  return(
    <div className="bodypr">
    <div className="containerprof">
      <h2
        style={{
          padding: 20,
          fontFamily: "arial",
          background: "#173d96",
          color: "white",
          minWidth: 850,
          textAlign: "left"
        }}
      >
        PROFILE
      </h2>
      <div className="avbox">
        <div className="photo" />
        <input
          type="file"
          id="myFile"
          name="filename"
          style={{ textAlign: "left", marginLeft: -25 }}
        />
        <input
          type="submit"
          className="ups"
          value="UPLOAD"
          style={{
            fontFamily: "arial",
            background: "#173d96",
            color: "white",
            border: "none",
            marginLeft: 290,
            height: 35,
            width: 100,
            marginTop: "-130px",
            fontWeight: "bold",
            borderRadius: 7
          }}
        />
      </div>
      <div className="avbox" style={{ height: "80%" }}>
        <form onSubmit={this.handleupdateSubmit}>
          <br />
          <br/>
            <br/>
          <h4 style={{background: "white", color: "#586575", fontFamily:"Arial", textAlign: "left", marginLeft: 15}}>
            Username:{" "}
            <input
              type="text"
              placeholder= "Enter new username"
              style={{ height: 25 }}
              id="editname"
              onChange={event => this.username = event.target.value}
            />{" "}
          </h4>
            <br/>
          <h4 style={{background: "white", color: "#586575", fontFamily:"Arial", textAlign: "left", marginLeft: 15}}>
            Age:{" "}
            <input
              type="number"
              placeholder="Enter new age"
              style={{ height: 25 }}
              id="editage"
              onChange={event => this.age = event.target.value}
            />{" "}
          </h4>
            <br/>
          <h4  style={{background: "white", color: "#586575", fontFamily:"Arial", textAlign: "left", marginLeft: 15}}>
             Email:{" "}
            <input
              type="email"
              value= {email}
              style={{ height: 25 }}
              disabled
            />{" "}
          </h4>
            <br/>
          <h4 style={{background: "white", color: "#586575", fontFamily:"Arial", textAlign: "left", marginLeft: 15, marginTop:7}}>
            Password:{" "}
            <input
              type="password"
              placeholder="********"
              style={{ height: 28 }}
              disabled
            />{" "}
          </h4>
          <br />
          <br />
          <br />
          <br />
          <br />


          <input
            type="submit"
            className="subs"
            value="UPDATE"
            style={{
              fontFamily: "arial",
              background: "#173d96",
              color: "white",
              border: "none",
              marginLeft: 290,
              height: 35,
              width: 100,
              marginTop: "-165px",
              fontWeight: "bold",
              borderRadius: 7
            }}
          />
        </form>
      </div>
    </div>
  </div>

  );

}

}

export default Prof;
