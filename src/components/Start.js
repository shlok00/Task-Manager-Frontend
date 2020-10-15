import React, { Component} from 'react';
import '../styles/start.css';
import Log from './Log.js';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

class Start extends Component{
render(){
  return(
    <div className="body">
   <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
   <div className="glow">A P P N A M E</div>
   <div className="container">
     <div className="scale">
       <div className="mugContainer">
         <div className="mug">
           <div className="coffee" />
           <div className="handle" />
         </div>
       </div>
     </div>
       <Link to="/login">
       <h1 style={{ WebkitTextStroke: "1px black" }}>S T A R T</h1>
       </Link>

       <Route exact path ="/login" component={Log}/>


   </div>
 </div>
  )

}}

export default Start
