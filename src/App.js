import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./compopnents/person";
import Form from "./compopnents/form";
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "Dilip",
      lastname: "Maharjan"
    }
  }
  componentDidMount() {
    console.log("called after the rendering the html");
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
        <Cat greeting="hi!"/>
        <Person hello="Hello" name="Dilip" word="You are doing fine, dude!"/>
        <Form/>
      </div>

    );
  }
}
function Cat(props) {
  return <h1>{props.greeting} Cats</h1>;
}

export default App;
