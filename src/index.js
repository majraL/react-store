import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import Mini from "./components/Mini";
import ToDoList from './components/ToDoList';
import './css/style.css';

render(<ToDoList />, document.getElementById("main"));
