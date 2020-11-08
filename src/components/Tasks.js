import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Todo.css';
import axios from 'axios';


var token = localStorage.getItem('token');
const tkx = JSON.parse(token);

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
  axios.post('/tasks', tkx).then(response=>{ localStorage.setItem('taskdata',JSON.stringify(response.data));}
  ).catch(error=>{alert("some alert"); console.log(error.status); console.log(tkx)});

  var tsks = localStorage.getItem('taskdata');
  var task = JSON.parse(tsks);
  console.log(task.tasks.length);

  for (var i=0; i<task.tasks.length; i++)
  {

  if(task.tasks[i].completed == "false")
  {  const template1 = `
    <li class="list-group-items"  id="${task.tasks[i]._id}" " draggable="true" data-id="${Date.now()}" style="position:relative;
     padding-left: 60px; background: ${task.tasks[i].color};">
    <ul style="list-style-type: none; margin-left: -40px;">
    <li>
      <h4 contenteditable="true" id="title" style="box-shadow: 3px 3px 10px #000;">
    ${task.tasks[i].title}</h4></li>
      <li><h5 contenteditable="true" id="desc" style="font-size:20px; padding:5px; font-weight: bold;  text-align: left;
      color: red;"><span style="font-size:13px; color: white;   text-shadow:
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;">${task.tasks[i].description}</span></h5></li>
      <li><p style="display: inline; font-size:12px; color:#fff;   text-shadow:
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;">Scheduled : </p><input type="date" id="sched" value="${task.tasks[i].scheduled}" style="width:150px;
       border:1px solid black; border-radius:10px;"/>   <button data-name="edit-btn" style="font-size: 12px; font-family:arial; background: #048226;
       box-shadow: 2px 2px 10px #000; color: white; border:none; padding: 4px; border-radius: 8px; margin-left: 20px;">UPDATE</button></li>
       <div class="liner"></div>
      </ul>
      <button class="btn  btn-sm" data-name="remove-btn"  style="background:#1ebd63; color: white; margin-left:300px; margin-top:-64px; border-radius: 50%;
       position:absolute; width: 28px; height: 28px;"><b>X</b></button>
         <input type="color" id="favcolor" name="favcolor" value="${task.tasks[i].color}" style= "height: 25px; width: 20px; border: none; margin-top: 70px; margin-left: -60px;"
         onChange="document.getElementById('${task.tasks[i]._id}').style.background = value">

    </li>`;
  const todosList = main.querySelector('[data-name="todos-list"]');
  todosList.insertAdjacentHTML("beforeend", template1);}
  else{
    const template1 = `
    <li class="list-group-items completed"  id="${task.tasks[i]._id}" " draggable="true" data-id="${Date.now()}" style="position:relative;
     padding-left: 60px; background: ${task.tasks[i].color};">
    <ul style="list-style-type: none; margin-left: -40px;">
    <li>
      <h4 contenteditable="true" id="title" style="box-shadow: 3px 3px 10px #000;">
    ${task.tasks[i].title}</h4></li>
      <li><h5 contenteditable="true" id="desc" style="font-size:20px; padding:5px; font-weight: bold;  text-align: left;
      color: red;"><span style="font-size:13px; color: white;   text-shadow:
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;">${task.tasks[i].description}</span></h5></li>
      <li><p style="display: inline; font-size:12px; color:#fff;   text-shadow:
  -1px -1px 0 #000,
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;">Scheduled : </p><input type="date" id="sched" value="${task.tasks[i].scheduled}" style="width:150px;
       border:1px solid black; border-radius:10px;"/>   <button data-name="edit-btn" style="font-size: 12px; font-family:arial; background: #048226;
       box-shadow: 2px 2px 10px #000; color: white; border:none; padding: 4px; border-radius: 8px; margin-left: 20px;">UPDATE</button></li>
       <div class="liner"></div>
      </ul>
      <button class="btn  btn-sm" data-name="remove-btn"  style="background:#1ebd63; color: white; margin-left:300px; margin-top:-64px; border-radius: 50%;
       position:absolute; width: 28px; height: 28px;"><b>X</b></button>
         <input type="color" id="favcolor" name="favcolor" value="${task.tasks[i].color}" style= "height: 25px; width: 20px; border: none; margin-top: 70px; margin-left: -60px;"
         onChange="document.getElementById('${task.tasks[i]._id}').style.background = value">

    </li>`;
    const compList = main.querySelector('[data-name="completed-list"]');
    compList.insertAdjacentHTML("beforeend", template1);
  }
}



  main.addEventListener("click", (e) => {

    if (e.target.tagName === "BUTTON") {
      const { name } = e.target.dataset;
      if (name === "add-btn") {
        const todoInput1 = main.querySelector('[data-name="todo-input"]');
        if (todoInput1.value.trim() !== "") {
          const value = todoInput1.value;
          const datatask = {
             task: {
              title: "Title",
              description: value,
              completed: "false",
              scheduled: new Date("2020-01-01")
         },
           accessToken: tkx.accessToken
          };
          axios.post(`/task`,datatask).then(response=>{ console.log(response.data);
            localStorage.setItem('tempid',JSON.stringify(response.data));
            var tempid = localStorage.getItem('tempid');
            var tmp = JSON.parse(tempid);
            console.log(tmp._id);
            var tmpid = tmp._id;
            const template = `
            <li class="list-group-items"  id="${tmpid}" draggable="true" data-id="${Date.now()}" style="position:relative; padding-left: 60px;">
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
               border:1px solid black; border-radius:10px;"/><button data-name="edit-btn" style="font-size: 12px; font-family:arial; background: #048226;
               box-shadow: 2px 2px 10px #000; color: white; border:none; padding: 4px; border-radius: 8px; margin-left: 20px;">UPDATE</button>
               </li>
               <div class="liner"></div>
              </ul>
              <button class="btn  btn-sm" data-name="remove-btn"  style="background:#1ebd63; color: white; margin-left:300px; margin-top:-64px; border-radius: 50%;
               position:absolute; width: 28px; height: 28px;"><b>X</b></button>
                 <input type="color" id="favcolor" name="favcolor" value="#ff0000" style= "height: 25px; width: 20px; border: none; margin-top: 70px; margin-left: -60px;"
                 onChange="document.getElementById('${tmpid}').style.background = value;"
                 >

            </li>`;

              const todosList1 = main.querySelector('[data-name="todos-list"]');
              todosList1.insertAdjacentHTML("beforeend", template);
              todoInput1.value = "";

          }
        ).catch(error=>{ if(error.status === 500){alert("Error Creating Task!"); console.log(error.status);}});



          a++;
        }

      }

      else if (name === "remove-btn") {
        var id = e.target.parentElement.id;
        console.log(id);
        const d = {accessToken: tkx.accessToken};
        axios.put(`/task/${id}`,d
        ).then(response=>{console.log('');}).catch(error=>{alert("Error in Deleting Task!");});
        e.target.parentElement.remove();      }

        else if (name === "edit-btn")
        { var id = e.target.parentElement.parentElement.parentElement.id;
          var date = e.target.previousSibling.previousSibling.value;
          var desc= e.target.parentElement.previousSibling.previousSibling.lastChild.textContent;
          var titl = e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.lastChild.textContent;
          var col = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.value;
          console.log(id,date,desc,titl,col);

          const dd = {
            task: {
              scheduled: date,
              title: titl,
              description: desc,
              color: col
            },
            accessToken: tkx.accessToken
          };
          axios.patch(`/task/${id}`,dd).then(response=>{console.log('');}).catch(error=>{alert("Error in Updating Task!");});
    }

      }
  }


);


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
        todo.classList.add("completed");
        var id = todo.id;
        const dd = {
          task: {
            completed: "True"
          },
          accessToken: tkx.accessToken
        };
        axios.patch(`/task/${id}`,dd).then(response=>{console.log('');}).catch(error=>{alert("Error in Completing Task!");});
      }

      else {
        todo.className = "list-group-items";
        var id = todo.id;
        const dd = {
          task: {
            completed: "False"
          },
          accessToken: tkx.accessToken
        };
        axios.patch(`/task/${id}`,dd);
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
  <div className="contr" style={{position: "fixed", marginTop: "160px"}}>
  <main className="row" style={{  maxWidth: "1200px"}}>

    <div className="input-group" style={{width:"750px", marginLeft: "140px", marginTop: "-100px", position: "fixed"}}>
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
    <div className="col-lg-6" style={{width: "1100px", borderRight: "3px dotted #e38820", marginTop:"70px"}}>
      <h3 style={{fontsize: "16px", width: "270px", fontFamily: "Architects Daughter", textAlign: "center", marginLeft:"150px", position: "fixed", marginTop:"-110px"}}>
      Scheduled Tasks</h3>
      <ul className="list-group" data-name="todos-list" style={{marginTop:"-30px"}}/>

    </div>

    <div className="col-lg-6"style={{width: "1100px",marginTop:"70px"}}>
      <h3 style={{fontsize: "16px", fontFamily: "Architects Daughter", position: "fixed", marginLeft:"160px", marginTop:"-110px"}}>Completed Tasks</h3>
      <ul className="list-group" style={{borderRadius:"0px", marginTop:"-30px"}}  data-name="completed-list" />
    </div>

  </main>
  <h1 style={{color:"#fff", padding:"10px", top:"0px", fontFamily: "Arial",
   position:"fixed", background: "black" ,width:"100%", textAlign: "left", fontSize:"20px", marginLeft:"0px", left: "0px"}}>HABITABLE - THE PRODUCTIVITY APP
   <select id="nav" name="NAVIGATION" style={{background: "black", color:"white", marginLeft:"790px", border:"none"}}>
  <option value="HOME">HOME</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
   </h1>
 </div>
</div>
);
};
}


export default App
