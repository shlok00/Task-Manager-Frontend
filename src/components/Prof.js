import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Prof.css';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as axios from "axios";

var token = localStorage.getItem('token');
const tkx = JSON.parse(token);
var ava='';
var avat='';
var url = '';

class Prof extends React.Component{
  constructor()
  {
    super()

      this.state = {
        age: null,
        username: null,
        file: null
    }
  }

componentDidMount(){
  const tk = {accessToken: tkx.accessToken};
  axios.put('/user/profile/avatar',tk).then(response=>{console.log(response.data); url = response.data;   document.getElementById('myImg').src = 'data:image/png;base64,'+url;
  }).catch(error=>{alert('error!');
  url='https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg';});
  document.getElementById('myImg').src = url;


  document.querySelector('#photo').addEventListener("change", e =>{
    console.log(e.target.files[0]);
    console.log(e.target.files);
    this.file = e.target.files[0];
            if (e.target.files && e.target.files[0]) {
                 var reader = new FileReader();
                 reader.onload = function (e) {
                   console.log(e.target.result);
                   ava=e.target.result;
                     document.getElementById('myImg').src = e.target.result;
                 };

                console.log(reader.readAsDataURL(e.target.files[0]));
             }
           }
         );}

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

  handleUpload = (event) =>
  {
    event.preventDefault();
    let file = this.file;
    var formdata = new FormData();
    formdata.append('avatar',file);
    formdata.append('accessToken', tkx.accessToken);

    axios.post('/user/profile/avatar',formdata,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
}).then(response=>{alert('avatar upload successful!');}).catch(error=>{alert('upload not successful'); console.log(error.response.data);

});
  }


render(){
  const {age} = this.state;
  const {username} = this.state;
  const {file} = this.state;

  var email = localStorage.getItem('email');
  email =  JSON.parse(email);


  return(
    <div className="bodypr">
    <div className="containerprof">
      <h2 style={{
          padding: 20,
          fontFamily: "arial",
          background: "#11151f",
          color: "#e8e682",
          minWidth: 850,
          textAlign: "left"
        }}
      >
        PROFILE
      </h2>
      <div className="avbox">
      <img className="photo" id="myImg" src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg" alt="profile" />
        <input
          type="file"
          id="photo"
          name="filename"
          accept=".png, .jpg, .jpeg"
          style={{ textAlign: "left", marginLeft: -25, color:"yellow" }}
        />


        <input
          type="submit"
          className="ups"
          value="UPLOAD"
          style={{
            fontFamily: "arial",
            background: "#d1cd06",
            color: "black",
            border: "none",
            marginLeft: 290,
            height: 35,
            width: 100,
            marginTop: "-138px",
            fontWeight: "bold",
            borderRadius: 7
          }}
          onClick={this.handleUpload}
        />

      </div>
      <div className="avbox" style={{ height: "80%" }}>
        <form onSubmit={this.handleupdateSubmit}>
          <br />
          <br/>
            <br/>
          <h4 style={{background: "transparent", color: "#e8e682", fontSize:"16px",fontFamily:"McLaren", textAlign: "left", marginLeft: 15, width:"460px"}}>
            Username:{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              placeholder= "Enter new username"
              style={{ height: 25 }}
              id="editname"
              onChange={event => this.username = event.target.value}
            />{" "}
          </h4>
            <br/>
          <h4 style={{background: "transparent", color: "#e8e682",fontSize:"16px", fontFamily:"McLaren", textAlign: "left", marginLeft: 15,width:"460px"}}>
            Age:{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="number"
              placeholder="Enter new age"
              style={{ height: 25 }}
              id="editage"
              onChange={event => this.age = event.target.value}
            />{" "}
          </h4>
            <br/>
          <h4  style={{background: "transparent", color: "#e8e682",fontSize:"16px", fontFamily:"McLaren", textAlign: "left", marginLeft: 15,width:"460px"}}>
             Email:{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="email"
              value= {email}
              style={{ height: 25 }}
              disabled
            />{" "}
          </h4>
            <br/>
          <h4 style={{background: "transparent", color: "#e8e682",fontSize:"16px", fontFamily:"McLaren", textAlign: "left", marginLeft: 15, marginTop:7,width:"460px"}}>
            Password:{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="password"
              placeholder="********"
              style={{ height: 28 }}
              disabled
            />{" "}
            <input
              type="submit"
              className="subs"
              value="UPDATE"
              style={{
                fontFamily: "arial",
                background: "#d1cd06",
                color: "black",
                border: "none",
                marginLeft: 290,
                height: 35,
                width: 100,
                marginTop:"90px",
                fontWeight: "bold",
                borderRadius: 7
              }}
            />
          </h4>
          <br />
          <br />
          <br />
          <br />
          <br />



        </form>
      </div>
    </div>
  </div>

  );

}

}

export default Prof;
