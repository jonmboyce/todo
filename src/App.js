import { Component } from 'react';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';//added bootstrap
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
  export class ToDoBanner extends Component {
    render = () =>
      <h4 className="bg-primary text-white text-center p-2">
        {this.props.displayName}'s To Do List ({this.props.tasks.filter(
          x => !x.done).length} items still to do.)
      </h4>
  };

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


//using the lambda syntax the return keyword is not needed, when using Lambda sytax need a div
render = () =>
  <div>
    {/*Features 1&2*/}
    {/*this is a react "stub"*/}
    <ToDoBanner
      displayName={this.state.userName}
      tasks={this.state.todoItems}
    />
  </div>
};

// export default App;
