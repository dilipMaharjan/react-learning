import React,{Component} from 'react';

class Date extends Component{
render(){
  return(
    <div>
    <p>{this.props.hello} {this.props.name}!{this.props.word}</p>
    </div>
  );
}
}
export default Date;
