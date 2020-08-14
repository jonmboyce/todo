import { Component } from 'react';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';//added bootstrap
//added below for the ToDoBanner.js reference
import { ToDoBanner } from './ToDoBanner';
import { ToDoRow } from './ToDoRow';
import { ToDoCreator } from './ToDoCreator';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//define the todo banner


export default class App extends Component {
  //Above we have created a class called "App" that extends the functionality of the Component class

  //The export keyword makes the class available for use outside the js file where it is created
  constructor() {
    //  We are going to create state data for our component. To do that, we need to create a constructor method. This method will get called when an object is created using this class. Said another way, this method will be called when the component is initialized. 

    //  To ensure that we have all the necessary features from React to create a stateful component, we need to call a method called super().  This super() calls the constructor for the {Component} class in react.
    super();
    //react components have a special property that's built in called "state" which is used to define the state of data
    //the to do items are JSON variables so comma separated and have the curlys
    this.state = {
      userName: "Shawn Neller",
      todoItems: [
        { action: "Move burn pile", done: false },
        { action: "Mow", done: false },
        { action: "Pay bills", done: true },
        { action: "Frisbee", done: false },
        { action: "Fix basket", done: false }
      ]
    }

  }//End ctor

  //Feature -3 todoTableRows Function
  //  If the ToDoRow Component's "done" property experiences a change event (checking the Done box in the UI) 
  //then the ToDoRow component calls a Callback method called toggleTodo (below) and passes toggleTodo the checked todo item
  todoTableRows = (isTaskDone) => this.state.todoItems.filter(x => x.done === isTaskDone).map(notCompleted =>
    <ToDoRow
      key={notCompleted.action}
      item={notCompleted}
      callback={this.toggleTodo}//the callback will be invoked(executed, run) when everything is finished
    />
  );


  //feature - 4 toggleToDo
  //  The toggleTodo method is invoked as a callback when the ToDoRow component has a change event to the "done" property
  //  .setState allows the data to be updated
  //  When setState is invoked, React will make a new object with the changes.  Under the hood, React will compare the new object with the DOM version of the object.  If there is a difference between the 2 objects then the DOM will get re-drawn and we see the changes 
  // the toggleTodo function is invoked as a callback from the <ToDoRow> component

  toggleTodo = (todo) => this.setState(
    {
      todoItems: this.state.todoItems.map(
        item => item.action === todo.action ? { ...item, done: !item.done } : item
      )
    }
  );


  //feature 5E
  //method below is the callback for the ToDoCreator component
  createNewTodoCallback = (newTask) => {
    if (!this.state.todoItems.find(
      x => x.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: newTask, done: false }]
      }, () => localStorage.setItem("todos", JSON.stringify(this.state)) //end of setItem
      ); //End of setstate
    }
  }


  //using the lambda syntax the return keyword is not needed, when using Lambda sytax need a div

  //Feature - 5A
  //  the method below is a built in react method to handle logic for when the app "mounts" or "loads"

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null ? JSON.parse(data) : {
        userName: "Billy Bob",
        todoItems: [
          { action: "Go Fishing", done: false },
          { action: "Go Hunting", done: false },
          { action: "Go Camping", done: false }
        ]
      }
    )
  };


  render = () =>
    <div>
      {/*Features 1&2*/}
      {/*this is a react "stub"*/}
      <ToDoBanner
        displayName={this.state.userName}
        tasks={this.state.todoItems}
      />

      {/*Feature 5B*/}
      <ToDoCreator
        callback={this.createNewTodoCallback}
      />

      {/* Feature - 3 */}
      <table className="table table-stripes table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {this.todoTableRows(false)}
        </tbody>
      </table>


<table className="table table-stripes table-bordered">
<thead>
  <tr>
    <th>Description</th>
    <th>ReAdd Task</th>
  </tr>
</thead>
<tbody>
  {this.todoTableRows(true)}
</tbody>
</table>

</div>
};





// export default App;
