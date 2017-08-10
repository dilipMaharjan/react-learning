import React,{Component} from 'react';

class Person extends Component{
  constructor(){
    super();
    this.state={
      isLoggedIn:true
    }
  }
  writeConsole(){
console.log("Get it working dude");
  }
render(){
  return(
    <div>
    <p>{this.props.hello} {this.props.name} {this.props.word}</p>
    <button onClick={this.writeConsole.bind()}>Write Console</button>
    </div>
  );
}
}
export default Person;
