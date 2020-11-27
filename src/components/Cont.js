import React from 'react';
import Clock from './Clock.js';
import Feed from './Feedback.js';
import '../styles/Cont.css';
import '../styles/Write.css';
import axios from 'axios';
import Back from '../images/back.jpg';
import Back1 from '../images/back1.png';
import Back2 from '../images/back2.png';
import Sleep from '../images/sleep.gif';
import Heal from '../images/health.gif';
import Work from '../images/work.gif';
import Home from '../images/but.png';
import Bub from '../images/bub.gif';
import Sho from '../images/sho.png';
import Shab from '../images/shab.png';
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
import { SocialIcon } from 'react-social-icons';

var notnum = 0;
var token = localStorage.getItem('token');
const tkx = JSON.parse(token);


class Cont extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1500
    });
    const d = {accessToken: tkx.accessToken};
    axios.put('/user/task/notification',d).then(response=>{notnum = response.data}).catch(alert("ERROR!"));
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

      <div className="carcont">
      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs = {false} >
<div style={{  width: "1020px"}}>
 <
        div className = "type"
        style = {
          {
            marginTop: "150px",textShadow:"2px 2px 5px black"
          }
        } > HabitAble < br / > < /div> <
        div className = "type1"
        style = {
          {
            marginTop: "400px",textShadow:"2px 2px 5px black"
          }
        } > SIMPLE. EFFECTIVE. MODERN. < /div> <div className="type1" style={{marginTop: "30px", fontSize:"19px",textShadow:"2px 2px 5px black"}}>YOUR BRAND NEW BESTFRIEND!</div >

        <
        img src = {
          Home
        }
        style = {
          {
            width: "1020px",
            height: "600px",

          }
        }
        /></div>
                     <div>
                         <img src={Back} style={{height: "600px"}}/>
                         <p className="legend" style={{background: "transparent", fontSize:"23px", textShadow:"2px 2px 7px black", opacity:"1"}}><span style={{fontSize:"50px"}}>TASK MANAGER</span>
                         <br/><br/>-Post New Tasks! < br / >
    -Edit Existing Tasks! < br / >
    -Schedule to Notify! < br / >
    -Color Coded!</p>
                     </div>
                     <div>
                         <img src={Back1} style={{height: "600px"}} />
                         <p className="legend" style={{background: "transparent", fontSize:"23px",textShadow:"2px 2px 7px black", opacity:"1"}}><span style={{fontSize:"50px"}}>HABIT TRACKER</span> <br/><br/>
                         -Track your Habits! < br / >
                        -Make New Streaks! < br / >
                        -Beautiful Graphs! < br / >
                        -Schedule your Day!</p>                       </div>
                     <div>
                         <img src={Back2} style={{height: "600px", width:"1020px"}} />
                         <p className="legend" style={{background: "transparent", fontSize:"23px",textShadow:"2px 2px 7px black", opacity:"1"}}><span style={{fontSize:"50px"}}>CHALLENGE A FRIEND</span> <br/><br/>
                         -Compete with your Friends! < br / >
    -Create Challenging Tasks! < br / >
    -Who finished first? < br / >
    </p>
                     </div>
                 </Carousel>
    </div>

      <
      div className = "des" > < /div><h2 style={{color: "white", textAlign:"center", background: "transparent", position: "absolute", marginTop: "700px", marginLeft: "50px", fontSize:"19px", width:"70%"}}
       >
<span style={{fontSize:"25px"}}     >  ABOUT US </span>
      <
      br / > < br / >< span data-aos = "zoom-out" style={{color:"#f2e529"}}
      data-aos-delay = "800" >
      HabitAble is in an initiative started by two coding buddies who aim to make task management and tracking of habits, schedules and routines not only simple, </span> <
        br / > < br / ><br/><br/><br/>
        < span data-aos = "zoom-out"
        data-aos-delay = "1300" > but efficient, interactive and fun! </span><
        br / > < br / ><br/><br/>
        < span data-aos = "zoom-out" style={{color:"#f2e529"}}
        data-aos-delay = "1900" >
        This applications consists of three parts, Task Manager, Habit Tracker and a fun Challenge feature where you can compete with your friends and family to see who wins the productivity contest!
        <br/><br/>By making use of this app, we want to encourage people to be more focused, productive and disciplined as it is the need of the hour for developing population experiencing lower attention span
        and poor time management skills.</span>< /h2>

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
      CONTACT US < /p> <p style={{color: "#ebe15b",padding:"15px", fontSize: "17px", textAlign: "center", width: "450px", borderRight: "1px dotted #b0c1d6", float:"left",
      marginTop:"-10px"}}>
      Shlok Naik <br/><br/>
      <img src={Sho} style={{height:"180px", width:"180px", borderRadius:"50%", boxShadow:"3px 3px 30px #689993"}}/>
      <br/><br/> <span style={{borderRadius:"5px", padding:"3px", background:"#ebe15b", color:"black", border:"2px outset #b5a800"}}>FRONTEND DEVELOPER</span><br/><br/>Phone: 93278xxxxx<br/>SIESGST <br/> NAVI MUMBAI<br/><br/><SocialIcon url="https://www.instagram.com/spacejamart/?hl=en" /> &nbsp; &nbsp; &nbsp;
      <SocialIcon
     url="https://www.github.com/shlok00" /> <br/>

      < /p> <
      p style = {
        {
          color: "#ebe15b",
          padding: "15px",
          fontSize: "17px",
          textAlign: "center",
          marginTop:"-10px"
        }
      } > Shabarish Ramaswamy <br/><br/>
      <img src={Shab} style={{height:"180px", width:"180px", borderRadius:"50%", boxShadow:"3px 3px 30px #689993"}}/>
      <br/><br/> <span style={{borderRadius:"5px", padding:"3px", background:"#ebe15b", color:"black", border:"2px outset #b5a800"}}>BACKEND DEVELOPER</span><br/><br/>Phone: 99978xxxxx<br/>SIESGST<br/>MUMBAI<br/><br/><SocialIcon url="https://www.instagram.com/shabarishramaswamy/?hl=en" /> &nbsp; &nbsp; &nbsp;
       <SocialIcon
      url="https://www.github.com/ShabarishRamaswamy" /> <br/>
      < /p> <
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
          textDecoration:"none"
        }
      }
         className="kk"
       > TASKS < /li></Link >
      <
      Link to = '/habits' > < li style = {
        {
          paddingTop: "6px",
          paddingBottom: "6px",
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
          textDecoration:"none"
        }
      }
         className="kk"
      > CHALLENGE < /li> </Link>

       <
      /ul>
    <Link to="/tasks"><span style={{fontSize:"30px", marginLeft:"70%", paddingTop:"10px", textShadow:"1px 1px 30px #f5e876"}}>🔔</span> </Link><Link to="/tasks">
    <div className="nots">{notnum}</div></Link>  <
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
