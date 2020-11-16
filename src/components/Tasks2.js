import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Tasks2.css';
import axios from 'axios';
import Habit from './Habit.js';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';


class Tasks2 extends Component{

  constructor()
  {
    super()

      this.state = {
           user: null,
           title: null,
           description: null,
           completed: null,
           scheduled: null

    }
  }


  render(){
    const {user} = this.state;
    const {compl} = this.state;
    const {title} = this.state;
    const {sched} = this.state;
    const {desk} = this.state;

    return(
      <div className="habits">
      <Router>
      <Route path='/landing'/>
      </Router>
      <div className="habicon">
      <Link to='/landing' style={{textDecoration:"none", color:"white"}}>
      <h2 style={{background:"black", color:"white", textAlign:"left", fontFamily:"McLaren, cursive", padding:"5px", fontSize:"19px"}}>HabitAble</h2>
      </Link>
      <br/>
      <h1 style={{marginLeft: "800px", color:"#fff", marginTop:"-80px", width:"20px"}}>
      <div className="movup">H</div>
      <div className="movdown">A</div>
      <div className="movup">B</div>
      <div className="movdown">I</div>
      <div className="movup">T</div>
      <div className="movdown"> T</div>
      <div className="movup">R</div>
      <div className="movdown">A</div>
      <div className="movup">C</div>
      <div className="movdown">K</div>
      <div className="movup">E</div>
      <div className="movdown">R</div></h1>
      <Habit/>
      </div>


      </div>

      );
};
}

export default Tasks2
