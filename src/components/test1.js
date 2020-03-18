import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props){
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    alert(this.props.children)
  }
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.children}</div>
        <button onClick={ this.handleClick }>Button</button>
      </div>
    )
  }
}

class Test extends Component {
  render() {
    return (
      <div>
        <ChildComponent name="Child1">Content</ChildComponent>
        <ChildComponent name="Child2"></ChildComponent>
      </div>
    )
  }
}

export default Test;