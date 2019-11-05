import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import Mini from "./components/Mini";
import ToDoList from './components/ToDoList';
import ToDoListArray from './components/ToDoList-array';
import Forms from './components/Forms';
import MemeGenerator from './components/MemeGenerator';
import Api from './components/Api';
import QuizApp from './components/QuizApp';
import './css/style.css';

render(<Router />, document.getElementById("main"));
