import React from 'react';
import Clock from './Clock.js';
import Feed from './Feedback.js';
import '../styles/Cont.css';
import '../styles/Write.css';
import Back from '../images/back.jpg';
import Back1 from '../images/back1.png';
import Back2 from '../images/back2.png';
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
import Notis from './Notis.js';
import Tasks from './Tasks1.js';
import Tasks2 from './Tasks2.js';
import Tasks3 from './Tasks3.js';
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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class Cont extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1500
    });
  }

  TriggerOutlook = (event) =>

          {    event.preventDefault();
              var body = escape('Send us your feedback' + String.fromCharCode(13));

              var subject = "FEED BACK!";
              window.location.href = "mailto:a.habitable_team@yahoo.com?body="+body+"&subject="+subject;

                  }

        Logout = (event) =>
                   { event.preventDefault();
                     window.history.go(-1);
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


            document.getElementById('tsks').addEventListener('mouseenter', e => {
              document.getElementById('blockboxs').style.opacity = 1;

            });

            document.getElementById('tsks').addEventListener('mouseleave', e => {
              document.getElementById('blockboxs').style.opacity = 0;
              document.getElementById('blockboxs').addEventListener('mouseenter', e => {
                document.getElementById('blockboxs').style.opacity = 1;});
                document.getElementById('blockboxs').addEventListener('mouseleave', e => {
                  document.getElementById('blockboxs').style.opacity = 0;});

            });

          });



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
      } > SIMPLE. EFFECTIVE. MODERN. < /div> <div className="type1" style={{marginTop: "30px", fontSize:"19px"}}>YOUR BRAND NEW BESTFRIEND!</div >

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
       >
      <
      br / > < br / >< span data-aos = "zoom-out"
      data-aos-delay = "600" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span> <
        br / > < br / >
        < span data-aos = "zoom-out"
        data-aos-delay = "900" >  incididunt ut labore et dolore magna aliqua. </span><
        br / > < br / >
        < span data-aos = "zoom-out"
        data-aos-delay = "1200" >
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipt. </span>< /h2>
        <div className="carcont">
        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs = {false}>
                       <div>
                           <img src={Back} />
                           <p className="legend" style={{background: "transparent", fontSize:"23px"}}><span style={{fontSize:"50px"}}>TASK MANAGER</span> <br/><br/>-Post New Tasks! < br / >
      -Edit Existing Tasks! < br / >
      -Schedule to Notify! < br / >
      -Color Coded!</p>
                       </div>
                       <div>
                           <img src={Back1} />
                           <p className="legend" style={{background: "transparent", fontSize:"23px"}}><span style={{fontSize:"50px"}}>HABIT TRACKER</span> <br/><br/>
                           -Track your Habits! < br / >
                          -Make New Streaks! < br / >
                          -Beautiful Graphs! < br / >
                          -Schedule your Day!</p>                       </div>
                       <div>
                           <img src={Back2} />
                           <p className="legend" style={{background: "transparent", fontSize:"23px"}}><span style={{fontSize:"50px"}}>CHALLENGE A FRIEND</span> <br/><br/>
                           -Compete with your Friends! < br / >
      -Create Challenging Tasks! < br / >
      -Who finished first? < br / >
      </p>
                       </div>
                   </Carousel>
      </div>
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
    <Link to ='/landing'>  <
      div className = "hd" >
      HabitAble < /div> </Link>


      <
      /div>

      <
      div className = "slide-out"
      id = "navbox" >
      <
      ul className = "sidy" id="blockboxs">
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
      Link to = '/challenge'>
      <
      li style = {
        {
          paddingTop: "6px",
          paddingBottom: "6px",
          textDecoration:"none", color:"#fff"
        }
      }
         className="kk"
      > CHALLENGE < /li> </Link>

       <
      /ul>
    <span style={{fontSize:"30px", marginLeft:"70%", paddingTop:"10px", textShadow:"1px 1px 30px #f5e876"}}>🔔</span> <div className="nots">0</div>  <
      br / >< br / > < br / > < br / ><br/><br/><
      Clock / >
      <
      br / > < br / > < br / ><br/><br/>

      <
      Link to = "/landing" > < div className = "letbox"
      style = {
        {
          marginTop: "-55px"
        }
      } > < div className = "qtxt" > HOME < /div><div className="linx"></div > < /div></Link > < br / >
      <
      div className = "letbox" id="tsks"> < div className = "qtxt" > LET 'S TRACK! <
      /div><div className="linx"></div > < /div> <
      br / > < br / > < br / > < br / >
      <
      Link to = '/profile' > < div className = "letbox" > < div className = "qtxt" > PROFILE < /div><div className="linx"></div > < /div></Link > < br / > < br / > < br / > < br / >

      <
      div className = "letbox" onClick={this.TriggerOutlook} > < div className = "qtxt" > FEEDBACK < /div><div className="linx"></div > < /div><br/ > < br / > < br / > < br / >
      <
      ScrollTo selector = "#con" >
      <
      div className = "letbox" > < div className = "qtxt" > CONTACT US < /div><div className="linx"></div ></div > <br/ > < br / > < br / > < br / >< /ScrollTo>
      <
      div className = "letbox" onClick={this.Logout} > < div className = "qtxt" > LOGOUT < /div> < /div>

      <
      /div>

      <
      Route exact path = "/profile"
      render = {
        () => < Prof / >
      }
      />

      <
      Route exact path = "/tasks"
      render = {
        () => < Tasks / >
      }
      /> <
      Route exact path = "/habits"
      render = {
        () => < Tasks2 / >
      }
      /> <
      Route exact path = "/challenge"
      render = {
        () => < Tasks3 / >
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
