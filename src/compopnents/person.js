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
    let arr=[1,2,3,4,5,6];
    const items=  arr.map((a,index)=>
      <li key={index}>
      {a}
      </li>);
  return(
    <div>
    <p>{isLoggedIn?this.props.hello:this.props.name+this.props.word}</p>
    <button onClick={this.writeConsole.bind(this)}>Write Console</button>
<ul>{items}</ul>
    </div>
  );
}
}
export default Person;
