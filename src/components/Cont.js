import React from 'react';
import Clock from './Clock.js';
import '../styles/Cont.css';
import '../styles/Write.css';
import Back from '../images/back.jpg';
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
import Tasks from './Tasks1.js';
import Tasks2 from './Tasks2.js';
import Button from 'react-bootstrap/Button';
import '../styles/Typer.css';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import DelayLink from 'react-delay-link';
import AOS from 'aos';
import 'aos/dist/aos.css';



class Cont extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1500
    });
  }

  render() {

    window.addEventListener('load', (event) => {

      const timer = document.querySelector('.type');
      setTimeout(function() {
        timer.style.opacity = 1;
      }, 2000);

      const timer1 = document.querySelector('.type1');
      setTimeout(function() {
        timer1.style.opacity = 1;
      }, 2000);


    })

    return (

      <
      div className = "bdhome" >
      <
      div className = "cont"
      style = {
        {
          marginLeft: -5,
          width: "110%"
        }
      } >
      <
      Router >

      <
      div className = "bx1"
      id = "home" > < div className = "boxes" >



      <
      div className = "type"
      style = {
        {
          marginTop: "150px"
        }
      } > HabitAble < br / > < /div> <
      div className = "type1"
      style = {
        {
          marginTop: "400px"
        }
      } > SIMPLE.EFFECTIVE.MODERN. < /div> <div className="type1" style={{marginTop: "30px", fontSize:"19px"}}>YOUR BRAND NEW BESTFRIEND!</div >

      <
      img src = {
        Home
      }
      style = {
        {
          width: "1040px",
          height: "580px",
          marginLeft: "-20px",
          marginTop: "-40px"
        }
      }
      /> <
      /div></div >

      <
      div className = "des" > < /div><h2 style={{color: "white", textAlign:"center", background: "transparent", position: "absolute", marginTop: "700px", marginLeft: "50px"}}
      data-aos = "zoom-out" >
      <
      br / > < br / >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <
        br / > < br / >
        incididunt ut labore et dolore magna aliqua. <
        br / > < br / >
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipt. < /h2>

        <
        div className = "bx5"
      id = "tm" > <
      div className = "boxes" >
      <
      div className = "sect" > < /div> <
      div className = "txt"
      style = {
        {
          fontSize: "23px"
        }
      } > < span data-aos = "zoom-up" > TASK MANAGER < /span><br/ > < br / > < span data-aos = "zoom-up"
      data-aos-delay = "600" > The modern task manager tool is an interactive, creative mechanism. < /span><br/ > < br / >
      <
      span data-aos = "zoom-up"
      data-aos-delay = "1100" >
      -Post New Tasks! < br / >
      -Edit Existing Tasks! < br / >
      -Schedule to Notify! < br / >
      -Color Coded! < /span></div > < img src = {
        Back
      }
      /> <
      /div></div >
      <
      div className = "bx5"
      id = "tm"
      style = {
        {
          marginTop: "1622px"
        }
      } > < div className = "boxes" >
      <
      div className = "sect" > < /div> <
      div className = "txt"
      style = {
        {
          fontSize: "23px"
        }
      } > < span data-aos = "zoom-up" > HABIT TRACKER < /span><br/ > < br / > < span data-aos = "zoom-up"
      data-aos-delay = "600" > Loren impsun dolor verade istimus lore, < /span><br/ > < br / >
      <
      span data-aos = "zoom-up"
      data-aos-delay = "1100" >
      -Post New Tasks! < br / >
      -Edit Existing Tasks! < br / >
      -Schedule to Notify! < br / >
      -Color Coded! < /span></div > < img src = {
        Back
      }
      /> <
      /div></div >
      <
      div className = "bx5"
      id = "tm"
      style = {
        {
          marginTop: "2122px"
        }
      } > < div className = "boxes" >
      <
      div className = "sect" > < /div> <
      div className = "txt"
      style = {
        {
          fontSize: "23px"
        }
      } > < span data-aos = "zoom-up" > CHALLENGE A FRIEND < /span><br/ > < br / > < span data-aos = "zoom-up"
      data-aos-delay = "600" > Loren impsun dolor verade istimus lore. < /span><br/ > < br / >
      <
      span data-aos = "zoom-up"
      data-aos-delay = "1100" >
      -Post New Tasks! < br / >
      -Edit Existing Tasks! < br / >
      -Schedule to Notify! < br / >
      -Color Coded! < /span></div > < img src = {
        Back
      }
      /> <
      /div></div >
      <
      div className = "con"
      id = "con" > < div className = "contact" > < p style = {
        {
          color: "white",
          textAlign: "Right",
          padding: "15px",
          fontSize: "20px"
        }
      } >
      CONTACT US < /p> <p style={{color: "#b0c1d6",padding:"15px", fontSize: "17px", textAlign: "left", width: "450px", borderRight: "1px dotted #b0c1d6", float:"left"}}>
      Shlok Naik - 118 A1082 < br / > Shabarish Ramaswamy - 118 A1077 < br / > TE - CE - D < /p> <
      p style = {
        {
          color: "#b0c1d6",
          padding: "15px",
          fontSize: "16px",
          textAlign: "right"
        }
      } > SIES Graduate School of Technology, < br / > Sri Chandrasekarendra Saraswati Vidyapuram < br / > Sector - V, Nerul, Navi Mumbai, Maharashtra 400706 < /p> <
      /div></div >
      <
      div className = "nav" >
      <
      div className = "hd" >
      HabitAble < /div>


      <
      /div>

      <
      div className = "slide-out"
      id = "navbox" >
      <
      ul className = "sidy" >
      <
      Link to = '/tasks' > < li style = {
        {
          paddingTop: "6px",
          paddingBottom: "6px",
          textDecoration:"none", color:"#fff"
        }
      }
         className="kk"
       > TASKS < /li></Link >
      <
      Link to = '/habits' > < li style = {
        {
          paddingTop: "6px",
          paddingBottom: "6px",
          textDecoration:"none", color:"#fff"
        }
      }
        className="kk"
      > HABITS < /li></Link >
      <
      li style = {
        {
          paddingTop: "6px",
          paddingBottom: "6px",
          textDecoration:"none", color:"#fff"
        }
      }
         className="kk"
      > CHALLENGE < /li> <
      /ul>
      <
      br / > < br / > < br / > < br / > < br / > < br / > < br / >
      <
      Clock / >
      <
      br / > < br / > < br / > < br / > < br / > < br / >

      <
      Link to = "/landing" > < div className = "letbox"
      style = {
        {
          marginTop: "-55px"
        }
      } > < div className = "qtxt" > HOME < /div><div className="linx"></div > < /div></Link > < br / >
      <
      div className = "letbox" > < div className = "qtxt" > LET 'S TRACK! <
      /div><div className="linx"></div > < /div> <
      br / > < br / > < br / > < br / >
      <
      Link to = '/profile' > < div className = "letbox" > < div className = "qtxt" > PROFILE < /div><div className="linx"></div > < /div></Link > < br / > < br / > < br / > < br / >
      <
      div className = "letbox" > < div className = "qtxt" > NOTIFICATIONS < /div><div className="linx"></div > < /div><br/ > < br / > < br / > < br / >
      <
      div className = "letbox" > < div className = "qtxt" > FEEDBACK < /div><div className="linx"></div > < /div><br/ > < br / > < br / > < br / >
      <
      ScrollTo selector = "#con" >
      <
      div className = "letbox" > < div className = "qtxt" > CONTACT US < /div></div > < /ScrollTo>

      <
      /div>

      <
      Route exact path = "/profile"
      render = {
        () => < Prof / >
      }
      /> <
      Route exact path = "/tasks"
      render = {
        () => < Tasks / >
      }
      /> <
      Route exact path = "/habits"
      render = {
        () => < Tasks2 / >
      }
      />

      <
      /Router> <
      div className = "boxbck" >

      <
      /div>

      <
      /div> <
      /div>
    );
  }


}

export default Cont;
