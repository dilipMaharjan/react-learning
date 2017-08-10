import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./compopnents/person";
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "Dilip",
      lastname: "Maharjan"
    }
  }
  componentDidMount() {
    console.log("called after the rednering the html");
      this.setState({firstname: "Philip"});
  }
  componentWillMount() {
    console.log("called before rendering the html");
  }
  componentWillUnMount() {
    console.log("called before component is removed from dom");
  }
  componentDidUnMount() {
    console.log("called after component is removed from dom");
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstname} {this.state.lastname}</h1>
        <Person hello="Hello" name="Dilip" word="You are doing fine, dude!"/>
      </div>

    );
  }
}

export default App;
