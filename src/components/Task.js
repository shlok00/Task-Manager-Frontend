import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import '../styles/Task.css';

class Task1 extends Component{
render(){
  const main = document.querySelector("main");

main.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const { name } = e.target.dataset;
    if (name === "add-btn") {
      const todoInput = main.querySelector('[data-name="todo-input"]');
      if (todoInput.value.trim() !== "") {
        const value = todoInput.value;
        const template = `
        <li class="list-group-item"   draggable="true" data-id="${Date.now()}" style="position:relative;">
          <p contenteditable="true">${value}</p>
          <button class="btn  btn-sm" data-name="remove-btn"   style="background:#c72e51; color: white;">X</button>
        </li>
        `;
        const todosList = main.querySelector('[data-name="todos-list"]');
        todosList.insertAdjacentHTML("beforeend", template);
        todoInput.value = "";
      }
    }

    else if (name === "remove-btn") {
      e.target.parentElement.remove();
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
  if (e.target.classList.contains("list-group-item")) {
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

  if (elemBelow.classList.contains("list-group-item")) {
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
      todo.className = "list-group-item";
    }
  }
});

  return(
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Drag &amp; Drop Example</title>
    {/* Bootstrap CSS */}
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossOrigin="anonymous"
    />
    <div className="bodytask">
    <div className="conti" style={{ position: "fixed" }}>
      <main className="row">
        <div className="input-group">
          <div className="input-group-prepend">
            <span
              className="input-group-text"
              style={{
                background: "#5a9194",
                color: "white",
                borderColor: "transparent"
              }}
            >
              Enter new task:{" "}
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="task"
            data-name="todo-input"
            style={{ borderColor: "white" }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              data-name="add-btn"
              style={{ background: "#229aa1" }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="col-4">
          <h3 style={{ color: "white" }}>Tasks to do</h3>
          <ul className="list-group" data-name="todos-list">
            <li className="list-group-item" data-id={1} draggable="true">
              <p contentEditable="true">task one</p>
              <button
                className="btn btn-sm"
                data-name="remove-btn"
                style={{ background: "#c72e51", color: "white" }}
              >
                X
              </button>
            </li>
            <li className="list-group-item" data-id={2} draggable="true">
              <p contentEditable="true">task two</p>
              <button
                className="btn btn-sm"
                data-name="remove-btn"
                style={{ background: "#c72e51", color: "white" }}
              >
                X
              </button>
            </li>
            <li className="list-group-item" data-id={3} draggable="true">
              <p contentEditable="true">task three</p>
              <button
                className="btn btn-sm"
                data-name="remove-btn"
                style={{ background: "#c72e51", color: "white" }}
              >
                X
              </button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h3 style={{ color: "white" }}>In Progress</h3>
          <ul
            className="list-group"
            style={{
              background: "linear-gradient(to bottom,#f7f5b0,#cfca3e)",
              borderRadius: 0,
              border: "4px solid black"
            }}
            data-name="in-progress-list"
          />
        </div>
        <div className="col-4">
          <h3 style={{ color: "white" }}>Completed</h3>
          <ul
            className="list-group"
            style={{
              background: "linear-gradient(to bottom,#82d1bb,#146b4d)",
              borderRadius: 0,
              border: "4px solid black"
            }}
            data-name="completed-list"
          />
        </div>
      </main>
    </div>
    <h1
      style={{
        color: "white",
        padding: 10,
        marginTop: "-500px",
        fontFamily: "McLaren, cursive",
        position: "fixed",
        background: "black",
        width: "100%",
        textAlign: "cnter",
        alignItems: "center",
        fontSize: 25
      }}
    >
      TASK MANAGER
    </h1>
    </div>
  </div>

  );
}


}

export default Task1
