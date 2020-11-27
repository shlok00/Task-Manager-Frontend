import React from 'react';
import '../styles/Tasks3.css';
import Habit from './Habit.js';
import axios from 'axios';
import Note from '../images/note.jpg';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';

var token = localStorage.getItem('token');
const tkx = JSON.parse(token);
var chaltask='';
var maintasks='';
var maintasks1;
 var tasks = [];
 var code='';

class Tasks3 extends React.Component {

  checkdone = (event) => {
    event.preventDefault();

    alert('CONGRATULATIONS ON FINISHING YOUR CHALLENGE!!');
  }

  Setchal = (event) => {
    event.preventDefault();
    code = document.getElementById('code').value;
    const d = {
      challenge: {tasks: tasks, code: code},
      accessToken: tkx.accessToken
    };
    axios.put('/challenge',d).then(response=>{console.log(response.data)}).catch(error=>{alert("ERROR!")});
  }





componentDidMount()
{ code = document.getElementById('code').innerHTML;
  const mainz = document.querySelector("main");


    mainz.addEventListener("click", (e) => {

    if (e.target.tagName === "BUTTON") {
      const { name } = e.target.dataset;
      if (name === "add1-bt") {
       maintasks = ' ' + ' ➜ ' + mainz.querySelector('[data-name="tas-input"]').value + ' ' + '<br>';
       const tod = mainz.querySelector('[data-name="taskchals"]');
       tod.insertAdjacentHTML("beforeend", maintasks);
      tasks.push(mainz.querySelector('[data-name="tas-input"]').value);
       var hablis = mainz.querySelector('[data-name="tas-input"]');
         hablis.value = "";
      }

    else if (name === "add2-bt"){
      code = mainz.querySelector('[data-name="tas-input1"]').value;
      const d = {accessToken: tkx.accessToken
      };
      axios.post(`/challenge/${code}`,d).then(response=>{console.log(response.data); maintasks1 = response.data.tasks; const tod = mainz.querySelector('[data-name="taskchals1"]');
    for(var i =0;i<maintasks1.length; i++){
        console.log(i);
        var l = 'task'+i;
        var r = `<button id="${l}" style="font-size:18px; color:#820719; line-height: 8.5px; background:none;border:none; font-weight: bold; height: 15px; ">&nbsp;&nbsp;➜ &nbsp;${maintasks1[i]}&nbsp;<br></button><br/>`;
      tod.insertAdjacentHTML("beforeend", r);}}).catch(error=>{alert("ERROR!")});

    }
    else{
      console.log(e.target.id);
      for(var iq =0; iq<=9; iq++)
      {  var a = 'task'+iq;
        if(e.target.id === a)
        {
          console.log("hey!");
          if(e.target.style.textDecoration==="none")
          e.target.style.textDecoration="line-through";
          else {
            e.target.style.textDecoration="none";

          }
        }
      }
    }
    }
    });


    mainz.addEventListener("mouseover", (e) => {
      for(var i =0; i<=9; i++)
    {  var a = 'task'+i;
      if(e.target.id === a)
      {
        e.target.style.boxShadow="none";
      }
    }});
  }


render(){
  return(
    <div>
    <main>
    <div>
    <link
rel="stylesheet"
href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
crossorigin="anonymous"/>
    <Router>
    <Route path='/landing'/>
    </Router>
  <div className="chalbody">
  <Link to='/landing' style={{textDecoration:"none", color:"white"}}>
  <h2 style={{background:"black", color:"white", textAlign:"left", fontFamily:"McLaren, cursive", padding:"5px", fontSize:"19px"}}>HabitAble</h2>
    </Link>
  <h1 style={{color: "#fff", minWidth:"800px", fontFamily:"Arial",fontSize:"35px", top:"18px", left:"20%", fontWeight:"600"}}>C H A L L E N G E - A - F R I E N D!</h1>
  <div className="wrap1" style={{marginTop:"60px", marginLeft:"50px", float: "left"}}>
  <div className="chalhead">Make Tasks!</div>
  <div className="chalbot">
  <div className="input-group" style={{maxWidth:"350px", marginLeft: "60px", marginTop: "60px", position: "fixed"}}>
        <div className="input-group-prepend">
        <br/><br/><br/><br/>
            <span className="input-group-text"  style={{background: "#c7ae08", color: "black", borderColor: "transparent", height: "38px", width:"95px" }}>Add Task: </span>
          </div>
          <input
            type="text"
            id="inps"
            className="form-control"
            placeholder="Challenge your friends!"
            data-name="tas-input"
            onChange = {event => {chaltask = event.target.value; console.log(chaltask);}}
            style={{border:"3.5px solid #c7ae08"}}
          />
          <div className="input-group-append">
            <button className="btn btn-success" data-name="add1-bt" style={{background: "#c7ae08", height: "38px", border: "1px solid #c7ae08", marginTop:"-96px",
            marginLeft:"350px", width:"85px", color:"black"}}>
              Add
            </button>
          </div>
        </div>
        <div className="incon">
        <h6 style={{color:"black", textAlign:"left", fontFamily:"McLaren, cursive", background:"white", paddingLeft:"20px", marginTop:"20px"}}>+ Code:
        <input id ="code" ></input></h6>
        <div className="tskwin">
        <h4 id = "tasklist" style={{background: "transparent", textAlign:"left", padding: "10px", fontSize:"20px", color:"black"}} data-name="taskchals"></h4>
        </div>
        <button className="btn btn-success" data-name="upd1-bt" style={{background: "#fff", height: "37px", color:"#052663",
         border: "1px solid #fff", marginTop:"-40px", marginLeft:"140px", width:"85px", border:"4px outset #c7ae08"}} onClick={this.Setchal}>
          Set!
        </button>
        </div>
  </div>
  </div>

  <div className="wrap2" style={{marginTop:"65px", marginLeft:"660px"}}>
  <div className="chalhead" style={{marginLeft:"400px"}}>Get Tasks!</div>
  <div className="chalbot" style={{  borderTopLeftRadius: "10px",
    borderTopRightRadius: "0px" }}> <div className="input-group" style={{maxWidth:"350px", marginLeft: "60px", marginTop: "60px", position: "fixed"}}>
      <div className="input-group-prepend">
      <br/><br/><br/><br/>
          <span className="input-group-text"  style={{background: "#c7ae08", color: "black", borderColor: "transparent", height: "38px", width:"95px" }}>Get Tasks: </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Challenge Accepted!"
          data-name="tas-input1"
          onChange = {event => {chaltask = event.target.value;}}
          style={{border:"3.5px solid #c7ae08"}}
        />
        <div className="input-group-append">
          <button className="btn btn-success" onClick={this.Getchal} data-name="add2-bt" style={{background: "#c7ae08", height: "38px", color: "black", border: "1px solid #c7ae08", marginTop:"-96px", marginLeft:"350px", width:"85px"}}>
            Start
          </button>
        </div>
      </div> <img src = {Note} style={{  height: "315px", width: "510px", marginTop:"140px"}}/>
      <h4 id = "tasklist" style={{background: "transparent", textAlign:"left", padding: "10px", fontSize:"21px", color:"#a30212", position:"absolute", fontWeight:"800",
        marginTop:"-300px", marginLeft:"5%"}} data-name="taskchals1"></h4>

        </div>
        <button className="btn btn-success" data-name="upd1-bt" style={{background: "#07a651", height: "37px", color:"#fff",
         border: "1px solid #fff", marginTop:"-330px", marginLeft:"130px", width:"85px", border:"3px outset ##07a651"}} onClick={this.checkdone}>
          Done!
        </button>
  </div>
  </div>
  </div>
  </main>
  </div>

  );
}









}

export default Tasks3
