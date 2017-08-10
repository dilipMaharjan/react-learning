import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Date from "./compopnents/date";
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
    this.setState({firstname: "Philip"});
    return (
      <div>
        <h1>{this.state.firstname} {this.state.lastname}</h1>
        <Date message="Hello props"/>
      </div>

    );
  }
}

export default App;
