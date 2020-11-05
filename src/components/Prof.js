import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Prof.css';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as axios from "axios";


class Prof extends React.Component{

render(){

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
        <form>
          <br />
          <br/>
            <br/>
          <h4 style={{background: "white", color: "#586575", fontFamily:"Arial", textAlign: "left", marginLeft: 15}}>
            Name:{" "}
            <input
              type="text"
              placeholder="Edit your Name"
              style={{ height: 25 }}
            />{" "}
          </h4>
            <br/>
          <h4 style={{background: "white", color: "#586575", fontFamily:"Arial", textAlign: "left", marginLeft: 15}}>
            Age:{" "}
            <input
              type="number"
              placeholder="Edit your Age"
              style={{ height: 25 }}
            />{" "}
          </h4>
            <br/>
          <h4  style={{background: "white", color: "#586575", fontFamily:"Arial", textAlign: "left", marginLeft: 15}}>
            Email:{" "}
            <input
              type="email"
              placeholder="EMAIL"
              style={{ height: 25 }}
              disabled
            />{" "}
          </h4>
            <br/>
          <h4 style={{background: "white", color: "#586575", fontFamily:"Arial", textAlign: "left", marginLeft: 15, marginTop:7}}>
            Password:{" "}
            <input
              type="password"
              placeholder="PASSWORD"
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
