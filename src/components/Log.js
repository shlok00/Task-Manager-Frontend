import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/login.css';
import '../styles/start.css';
import Cont from './Cont.js';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as axios from "axios";

class Log extends Component
{

  constructor()
  {
    super()

      this.state = {
        email: null,
        password: null,
        age: null,
        username: null,
        hash: null
    }
  }




  handleHash = (event) => {
    event.preventDefault();

    axios.post(`/user/confirm/${this.hash}`,this.token ).then(response=>{
       console.log(response.status);
       alert("Email verification successful!");
  }).catch(error=>{console.log(error.response.data); alert("Unsuccessful! Try again!")});

  }



  handleLoginSubmit = (event) =>
   { event.preventDefault();
     const data1 = {
       email: this.email,
       password: this.password
     };

   axios.post('/user/login',data1).then(response=>{
      if(response.status == 200)
      { console.log(response.data);
        this.token = response.data;
        alert("Login Successful!");
        localStorage.setItem('email', JSON.stringify(this.email));
        localStorage.setItem('token', JSON.stringify(this.token));
        document.getElementById('subs').disabled = false;

      }
     }
   ).catch(error=>{if(error.status != 200){
     console.log(error.status);
      alert("Login Error Detected!");
      console.log(error.data);
   }});


}



  handleSignupSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: this.username,
      age: this.age,
      email: this.email,
      password: this.password
    };

    axios.post(`/signup`,data).then(response=>{
        alert('SIGNUP successful!');
        localStorage.setItem('uname', JSON.stringify(this.username));
        localStorage.setItem('age', JSON.stringify(this.age));

   }
 ).catch(err=> {alert('SIGNUP ERROR!!')});

  }


  render(){
    const {email} = this.state;
    const {password} = this.state;
    const {age} = this.state;
    const {username} = this.state;
    const {token} = this.state;
  return(
    <Router>
    <div className="bd">
  <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />

  <div className="contain">
    <div className="box-1">
      <div className="content-holder">
        <div className="glow"><h3>HabitAble</h3><br/></div>
      <h2>Hello!</h2>
        <p style={{color: "white"}}>JOIN US!</p>
        <div className="scale">
          <div className="mugContainer">
            <div className="mug">
              <div className="coffee" />
              <div className="handle" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="box-2">
      <div className="login-form-container">
        <h1 style={{ fontSize: "150%", color: "#000", marginTop: "-55px", marginLeft:"80px", color:"white"}}>LOGIN FORM</h1>
        <br/><br />
        <br />
        <form>
        <input type="email" placeholder="Email" className="input-field" style={{marginLeft: "50px"}} id="emaill"  onChange={event => this.email = event.target.value}/>
        <br />
        <br />
        <input type="password" placeholder="Password" className="input-field" style={{marginLeft: "50px"}} id="passwordl" onChange={event => this.password = event.target.value} />
        <br />
        <br />
        <input className="login-button" type="submit" style={{marginLeft: "52px", marginTop: "117px"}} value="LOGIN!"
         onClick={this.handleLoginSubmit}/>

        </form>
      </div>
      <div className="signup-form-container">
      <br/><br/>
        <h1 style={{ fontSize: "150%" ,marginTop: "-85px", marginLeft: "-250px", color:"white"}}>SIGN UP FORM</h1>
        <br />
        <br />
        <br/> <br/>
        <form onSubmit={this.handleSignupSubmit} >
        <input type="text" placeholder="Username" className="input-field" id="username" onChange={event => this.username = event.target.value}/>
        <br />
        <br />
        <input type="number" placeholder="Age" className="input-field" id="age" onChange={event => this.age = event.target.value}/>
        <br />
        <br />
        <input type="email" placeholder="Email" className="input-field" id="email" onChange={event => this.email = event.target.value}/>
        <br />
        <br />
        <input type="password" placeholder="Password" className="input-field" id="password" onChange={event => this.password = event.target.value} />
        <br/><br/><br/>
        <input className="signup-button" type="submit" style={{marginTop:"-20px"}} value ="SIGN UP!"  />
        </form>
        <br/><br/><br/><br/>
        <div style={{background: "#1b1978", height: "15px", width: "600px", color:"white", borderRadius: "5px", position:"absolute",
         marginTop:"-30px", marginLeft: "-290px", padding:"15px", border:"3px outset #34327d"}}>
         <form onSubmit={this.handleHash}>
        <label>Enter the hash-code recieved in email: </label>
        <input type="text" onChange={event => this.hash = event.target.value} />
        <input type="submit" style={{width:"70px", background:"#000", color:"#fff", border:"none", height:"20px", hover: "cursor: pointer"}}/>
        </form>
      </div>
        <Link to="/landing">
        <input type="button" id="subs" value="CONTINUE" style={{marginLeft: "-400px",
        height: "50px", width:"210px", borderRadius:"22px", fontSize:"20px", marginTop:"40px"}} className="continue" disabled/>
        </Link>
        <Route exact path ="/landing" render={ () => <Cont/>}/>
        <Route exact path ="/" />

      </div>
    </div>
  </div>
</div>
</Router>

);
};

}

export default Log;
