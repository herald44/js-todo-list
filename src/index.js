import { createTodo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import {  initialdomManip} from './initial-dom-manip.js'

//call blankprojectload on first land
blankProjectLoad();

//call DOM manipilation module to control UI
initialdomManip();
 
//TODO; click event module HERE for tode and project 

// caal creatToDo,js module file and apply some objects/properties (this will eventually be replaced by UI inputs)
const myToDo = createTodo("Grocery Run", "Go get groceries", "7/8/2022", "low", "meat", "Eggs", "milk");
const myToDo2 = createTodo("Homework", "Do odin project work", "23/2/2023", "medium", "read module, do tode project");
console.log("show mw properties on myToDo from index.js.......", myToDo);
console.log("show me properties on myToDo2 from index.js......", myToDo);