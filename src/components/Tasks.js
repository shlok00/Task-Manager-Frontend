import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Todo.css';
import axios from 'axios';



class App extends Component{

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


  componentDidMount(){
  const main = document.querySelector("main");
  var a = 1;
  main.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const { name } = e.target.dataset;
      if (name === "add-btn") {
        const todoInput = main.querySelector('[data-name="todo-input"]');
        if (todoInput.value.trim() !== "") {
          const value = todoInput.value;
          const template = `
          <li class="list-group-items"  id="item${a}" draggable="true" data-id="${Date.now()}" style="position:relative; padding-left: 60px;">
          <ul style="list-style-type: none; margin-left: -40px;">
          <li>
            <h4 contenteditable="true" id="title" style="box-shadow: 3px 3px 10px #000;">Title</h4></li>
            <li><h5 contenteditable="true" id="desc" style="font-size:20px; padding:5px; font-weight: bold;  text-align: left;
            color: red;"><span style="font-size:13px; color: white;   text-shadow:
   -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;">${value}</span></h5></li>
            <li><p style="display: inline; font-size:12px; color:#fff;   text-shadow:
   -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;">Scheduled : </p><input type="date" id="sched" value="2020-01-01" style="width:150px;
             border:1px solid black; border-radius:10px;"/></li>
             <div class="liner"></div>
            </ul>
            <button class="btn  btn-sm" data-name="remove-btn"  style="background:#1ebd63; color: white; margin-left:300px; margin-top:-64px; border-radius: 50%;
             position:absolute; width: 28px; height: 28px;"><b>✓</b></button>
               <input type="color" id="favcolor" name="favcolor" value="#ff0000" style= "height: 25px; width: 20px; border: none; margin-top: 70px; margin-left: -60px;"
               onChange="document.getElementById('item${a}').style.background = value;"
               >

          </li>`;

          const todosList = main.querySelector('[data-name="todos-list"]');
          todosList.insertAdjacentHTML("beforeend", template);
          todoInput.value = "";
          const id = null;
          a++;
        //**  axios.get('http://habitable-productivityapp.herokuapp.com/tasks').then(response=>{console.log(response.data); id = response.data;}) **/

          const data1 = {
       user: this.user,
       title: this.title,
       description: this.desc,
       completed: this.compl,
       scheduled: this.sched
     };
        /** axios.post('http://habitable-productivityapp.herokuapp.com/task',data1).then(res=>{console.log(res.response.status); alert('Task added to Database');}).catch(
            err=>{console.log(err.response.status); alert('Error Adding Task to Database');}
          );**/
        }

      } else if (name === "remove-btn") {
        e.target.parentElement.remove();
        /**axios.delete('http://habitable-productivityapp.herokuapp.com/task/${id}'); **/
      }
    }
  });

  main.addEventListener("dragenter", (e) => {
    if (e.target.classList.contains("list-group")) {
      e.target.classList.add("drop");
    }
  });

  main.addEventListener("dragleave", (e) => {
    if (e.target.classList.contains("drop")) {
      e.target.classList.remove("drop");
    }
  });

  main.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("list-group-items")) {
      e.dataTransfer.setData("text/plain", e.target.dataset.id);
    }
  });

  let elemBelow = "";

  main.addEventListener("dragover", (e) => {
    e.preventDefault();

    elemBelow = e.target;
  });

  main.addEventListener("drop", (e) => {
    const todo = main.querySelector(
      `[data-id="${e.dataTransfer.getData("text/plain")}"]`
    );

    if (elemBelow === todo) {
      return;
    }

    if (elemBelow.tagName === "P" || elemBelow.tagName === "BUTTON") {
      elemBelow = elemBelow.parentElement;
    }

    if (elemBelow.classList.contains("list-group-items")) {
      const center =
        elemBelow.getBoundingClientRect().y +
        elemBelow.getBoundingClientRect().height / 2;

      if (e.clientY > center) {
        if (elemBelow.nextElementSibling !== null) {
          elemBelow = elemBelow.nextElementSibling;
        } else {
          return;
        }
      }

      elemBelow.parentElement.insertBefore(todo, elemBelow);
      todo.className = elemBelow.className;
    }

    if (e.target.classList.contains("list-group")) {
      e.target.append(todo);

      if (e.target.classList.contains("drop")) {
        e.target.classList.remove("drop");
      }

      const { name } = e.target.dataset;

      if (name === "completed-list") {
        if (todo.classList.contains("in-progress")) {
          todo.classList.remove("in-progress");
        }
        todo.classList.add("completed");
      } else if (name === "in-progress-list") {
        if (todo.classList.contains("completed")) {
          todo.classList.remove("completed");
        }
        todo.classList.add("in-progress");
      } else {
        todo.className = "list-group-items";
      }
    }
  });
  }

  render(){
    const {user} = this.state;
    const {compl} = this.state;
    const {title} = this.state;
    const {sched} = this.state;
    const {desk} = this.state;

    return(


<div className="bodyts">
<link
rel="stylesheet"
href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
crossorigin="anonymous"/>
  <div className="contr" style={{position: "fixed"}}>
  <main className="row" style={{  maxWidth: "1200px"}}>

    <div className="input-group" style={{width:"750px", marginLeft: "140px", marginTop: "0px"}}>
      <div className="input-group-prepend">
      <br/><br/><br/><br/>
        <span className="input-group-text"  style={{background: "#e38820", color: "white", borderColor: "transparent", height: "38px"}}>Enter new task: </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="What will you do today?"
        data-name="todo-input"
        onChange = {event => this.desc = event.target.value}
      />
      <div className="input-group-append">
        <button className="btn btn-success" data-name="add-btn" style={{background: "#e38820", height: "38px", marginTop: "-97px"}}>
          Append
        </button>
      </div>
    </div>
    <div className="col-lg-6" style={{width: "1100px", borderRight: "3px dotted #e38820", marginTop:"-40px"}}>
      <h3 style={{fontsize: "16px", width: "270px", fontFamily: "Architects Daughter", textAlign: "center", marginLeft:"150px"}}>
      Scheduled Tasks</h3>
      <ul className="list-group" data-name="todos-list"/>

    </div>

    <div className="col-lg-6"style={{width: "1100px",marginTop:"-40px"}}>
      <h3 style={{fontsize: "16px", fontFamily: "Architects Daughter"}}>Completed Tasks</h3>
      <ul className="list-group" style={{borderRadius:"0px" }}  data-name="completed-list" />
    </div>

  </main>
  <h1 style={{color:"#fff", padding:"10px", top:"0px", fontFamily: "Arial",
   position:"fixed", background: "black" ,width:"100%", textAlign: "left", fontSize:"20px", marginLeft:"0px", left: "0px"}}>HABITABLE - THE TASK MANAGER</h1>
 </div>
</div>
);
};
}


export default App
