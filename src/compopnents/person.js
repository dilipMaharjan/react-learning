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
this.setState({
  isLoggedIn:!this.state.isLoggedIn
});
  }
render(){
  const isLoggedIn=this.state.isLoggedIn;
  return(
    <div>
    <p>{isLoggedIn?this.props.hello:this.props.name+this.props.word}</p>
    <button onClick={this.writeConsole.bind(this)}>Write Console</button>
    </div>
  );
}
}
export default Person;
