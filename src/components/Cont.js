import React from 'react';
import Clock from './Clock.js';
import '../styles/Cont.css';
import '../styles/Write.css';
import Task from '../images/task.gif';
import Sleep from '../images/sleep.gif';
import Heal from '../images/health.gif';
import Work from '../images/work.gif';
import Home from '../images/but.png';
import Bub from '../images/bub.gif';
import Gg from '../images/gg.png';
import Gs from '../images/gs.png';
import Gw from '../images/gw.png';
import ScrollTo from "react-scroll-into-view";
import Prof from './Prof.js';
import Tasks from './Tasks.js';
import Button from 'react-bootstrap/Button';
import '../styles/Typer.css';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import DelayLink from 'react-delay-link';


class Cont extends React.Component{
  render() {
      window.addEventListener('load',(event)=>{

      const timer = document.querySelector('.type');
        setTimeout(function(){
          timer.style.opacity = 1;
      },2000);

      const timer1 = document.querySelector('.type1');
        setTimeout(function(){
          timer1.style.opacity = 1;
      },2000);


    })

      return (
                    <Router>
        <div className="bdhome" >
        <div className="cont" style={{marginLeft: -5, width: "110%"}}>


          <div className="bx1" id="home"><div className="boxes">

          <img src={Gg} style={{
            borderRadius:"50%", height:"90px",
             width:"90px", position: "absolute",
             top: "50px",
             opacity: "0.8",
             left: "90px"
          }} id="im1"/>
          <img src={Gw} style={{
            borderRadius:"50%", height:"90px",
             width:"90px", position: "absolute",
             top: "170px",
             opacity: "0.8",
             left: "90px"
          }} id="im2"/>
          <img src={Gs} style={{
            borderRadius:"50%", height:"90px",
             width:"90px", position: "absolute",
             top: "290px",
             opacity: "0.8",
             left: "90px"
          }} id="im3"/>

 <div className="type">HabitAble<br/></div>
 <div className="type1" >SIMPLE.  EFFECTIVE.  MODERN.</div>

          <img src = {Home} style={{width: "700px", marginLeft: "260px" }}/>
          </div></div>


          <div className="bx5" id="tm"><div className="boxes">
          <div className="sect"></div> 
 <div className="txt">TASK MANAGER<br/><br/>The modern task manager tool is an interactive, creative mechanism.<br/><br/>
          - Post New Tasks!<br/>
          - Edit Existing Tasks!<br/>
          - Classify as 'In Progress' and 'Completed'<br/>
          - Color Coded! </div><img src = {Task}/>
          </div></div>
          <div className="con" id="con"><div className="contact"><p style={{color: "white", textAlign: "Right", padding:"15px", fontSize: "20px" }}>
          CONTACT US</p> <p style={{color: "#b0c1d6",padding:"15px", fontSize: "17px", textAlign: "left", width: "450px", borderRight: "1px dotted #b0c1d6", float:"left"}}>
           Shlok Naik - 118A1082 <br/> Shabarish Ramaswamy - 118A1077 <br/> TE-CE-D</p>
           <p style={{color: "#b0c1d6",padding:"15px", fontSize: "16px", textAlign: "right"}}>SIES Graduate School of Technology,<br/> Sri Chandrasekarendra Saraswati Vidyapuram <br/> Sector-V, Nerul, Navi Mumbai, Maharashtra 400706 </p>
           </div></div>
          <div className="nav">
          <div className="hd">
          HabitAble</div>


          </div>
          <div className="navbox">
            <br/><br/><br/><br/><br/><br/><br/>
          <Clock/>
          <br/><br/><br/><br/><br/><br/>
          <ScrollTo selector="#home">
        <div className="letbox" style={{marginTop:"-55px"}}><div className="qtxt">HOME</div><div class="linx"></div> </div></ScrollTo><br/>
        <ScrollTo selector="#tm">
       <Link to="/tasks"><div className="letbox"><div className="qtxt">TASKS</div><div class="linx"></div> </div></Link> </ScrollTo> <br/><br/><br/><br/>
        <Link to='/profile'>  <div className="letbox"><div className="qtxt">PROFILE</div><div class="linx"></div> </div></Link><br/><br/><br/><br/>


            <div className="letbox"><div className="qtxt">NOTIFICATIONS</div><div class="linx"></div></div><br/><br/><br/><br/>
              <div className="letbox"><div className="qtxt">FEEDBACK</div><div class="linx"></div></div><br/><br/><br/><br/>
              <ScrollTo selector="#con">
            <div className="letbox"><div className="qtxt">CONTACT US</div></div> </ScrollTo>
            <Route exact path ="/profile" render={ () => <Prof/>}/>
            <Route exact path ="/tasks" render={ () => <Tasks/>}/>
          </div>

          <div className="boxbck"></div>

      </div>
        </div>
          </Router>
      );
    }


}

export default Cont;
