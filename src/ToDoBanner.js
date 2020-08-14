import React, {Component} from 'react';

export class ToDoBanner extends Component {
    render = () =>
      <h4 className="bg-primary text-white text-center p-2">
        {this.props.displayName}'s To Do List ({this.props.tasks.filter(
          x => !x.done).length} items still to do.)
      </h4>
  };