import React from 'react';
import Clock from './Clock.js'
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
import Button from 'react-bootstrap/Button'
import '../styles/Typer.css';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Task1 from './Task.js';

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
        <div className="bdhome">
        <div className="cont">
          <div className="navbox"><Clock/>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <div className="letbox"><div className="qtxt">PROFILE</div></div> <br/><br/><br/><br/>
            <div className="letbox"><div className="qtxt">NOTIFICATIONS</div></div><br/><br/><br/><br/>
              <div className="letbox"><div className="qtxt">FEEDBACK</div></div>

          </div>
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

 <div className="type">APP NAME<br/></div>
 <div className="type1" >SIMPLE.  EFFECTIVE.  MODERN.</div>

          <img src = {Home} style={{width: "700px", marginLeft: "260px" }}/>
          </div></div>
          <div className="bx2" id="work"><div className="boxes">
          <div className="sect"></div><Button variant="light" target="_blank" >LET'S GO!</Button><div className="txt">WORK<br/>Lorem Ipsum is simply dummy
           text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to
          make a type specimen book. </div>
          <img src = {Work}/>
         </div></div>
          <div className="bx3" id="health"><div className="boxes">
          <div className="sect"></div><Button variant="light" target="_blank" >LET'S GO!</Button><div className="txt">HEALTH<br/>Lorem Ipsum is simply dummy
           text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to
          make a type specimen book.</div><img src = {Heal}/>
          </div></div>
          <div className="bx4" id="sleep"><div className="boxes">
          <div className="sect"></div><Button variant="light" target="_blank" >LET'S GO!</Button><div className="txt">SLEEP<br/>Lorem Ipsum is simply dummy
           text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to
          make a type specimen book.</div><img src = {Sleep}/>
          </div></div>
          <div className="bx5" id="tm"><div className="boxes">
          <div className="sect"></div><Button variant="light" >LET'S GO!</Button>
 <div className="txt">TASK MANAGER<br/>Lorem Ipsum is simply dummy
           text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to
          make a type specimen book.</div><img src = {Task}/>
          </div></div>
          <div className="con" id="con"><div className="contact"><p style={{color: "white", textAlign: "Right", padding:"15px", fontSize: "20px" }}>
          CONTACT US</p></div></div>
          <div className="nav">
          <div className="hd">
          APP NAME</div>
            <ScrollTo selector="#home">
          <div className="hd1" style={{marginLeft:"140px"}}>HOME</div> </ScrollTo>
          <ScrollTo selector="#work">
          <div className="hd1" >WORK</div> </ScrollTo>
            <ScrollTo selector="#health">
          <div className="hd1">HEALTH</div> </ScrollTo>
            <ScrollTo selector="#sleep">
          <div className="hd1">SLEEP</div> </ScrollTo>
          <ScrollTo selector="#tm">
        <div className="hd1">TASKS</div> </ScrollTo>
            <ScrollTo selector="#con">
          <div className="hd1">CONTACT US</div> </ScrollTo>
          </div>

          <div className="boxbck"></div>

      </div>
        </div>

      );
    }


}

export default Cont;
