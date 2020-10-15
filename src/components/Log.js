import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/login.css';
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
        logemail: null,
        logpassword: null

    }
  }

  handleLoginSubmit = (event) =>
   { event.preventDefault();
     const data1 = {
       logemail: this.logemail,
       logpassword: this.logpassword
     };

     axios.post("user/login",data1).then(res=>{console.log(res)}).catch(err=> {console.log(err);})

   }

  handleSignupSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: this.username,
      age: this.age,
      email: this.email,
      password: this.password
    };

    axios.post("signup",data).then(res=>{console.log(res)}).catch(err=> {console.log(err);})
  }


  render(){
    const {email} = this.state;
    const {password} = this.state;
    const {age} = this.state;
    const {username} = this.state;
    const {logemail} = this.state;
    const {logpassword} = this.state;
  return(
    <Router>
    <div className="bd">
  <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
  <div className="contain">
    <div className="box-1">
      <div className="content-holder">
        <h2>Hello!</h2>
        <p style={{color: "white"}}>JOIN US!</p>
      </div>
    </div>
    <div className="box-2">
      <div className="login-form-container">
        <h1 style={{ fontSize: "150%", color: "#000", marginTop: "-55px", marginLeft:"60px", color:"white"}}>LOGIN FORM</h1>
        <br/><br />
        <br />
        <form>
        <input type="email" placeholder="Email" className="input-field" style={{marginLeft: "50px"}} id="emaill"  onChange={event => this.logemail = event.target.value}/>
        <br />
        <br />
        <input type="password" placeholder="Password" className="input-field" style={{marginLeft: "50px"}} id="passwordl" onChange={event => this.logpassword = event.target.value} />
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
        <Link to="/home">
        <input type="button" value="CONTINUE" style={{marginLeft: "-400px", height: "40px", width:"180px", borderRadius:"10px"}} className="continue"/>
        </Link>
        <Route exact path ="/home" component={Cont}/>
      </div>
    </div>
  </div>
</div>
</Router>

);
};


}

export default Log;
