import React, { Component } from 'react';

export class ToDoCreator extends Component {

    constructor(props){
        super(props);
        this.state = {newItemText: ""}
    } //end of ctor

//feature 5C
//method for the onChange event of the input box below
updateNewTextValue = (event) => {
    this.setState(
        {newItemText: event.target.value}
    );
};

//Feature 5D
//method for the onclick of the add button
createNewToDo = () => {
    this.props.callback(this.state.newItemText);
    this.setState({newItemText: ""});  //this clears the new todo item from the input box
}

    render = () =>
        <div className="my-1">
            <input className="form-control" value={this.state.newItemText}
                onChange={this.updateNewTextValue} />
            
            <button className="btn btn-primary mt-1" onClick={this.createNewToDo}> ADD </button>
        </div>
};