import React from 'react';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      age: 20,
      color: 'red',
    }
    
  }

  changeAge(age) {
    this.setState({
      age:age,
    });

    this.refs.submitBtn.style.color = 'red';
  }

  changeColor(){
    this.setState({
      color:'blue',
    });
  }


  render (){

    const headerStyle = {
      header:{
        "color":(this.state.color)
      }
    }
    return (
      <div>
        <h1 style = {headerStyle.header} onClick = {this.changeColor.bind(this)}>This is header</h1>
        <p>{`User Id: ${this.props.userid}`}</p>
        <p>{`Age: ${this.state.age}`}</p>
        <input type="button" value="Click" ref='submitBtn'  onClick = {this.changeAge.bind(this, 30)}/>
        <input type="text" onChange = {this.props.changeValue}/>
      </div>
      
    )
  }
}