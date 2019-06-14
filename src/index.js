import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Greeting from './Components/greeting';
import Input from './Components/input';
import styled from 'styled-components';
import PCHeader from './Components/pc_header'
import './css/index.css';


class Index extends React.Component{

   constructor(props) {
       super (props);
       this.state = {
           userName : 'cyrus',
           lists:[],
       }
       this.addList = this.addList.bind(this);
   }
   
   changeValue(event){
        this.setState({
            userName: event.target.value,
        })
   }
 
   addList(list) {
        const { lists } = this.state;
        this.setState({
            lists: [...lists, list],
        })
   }

    render() {
        const { lists } = this.state;
        setTimeout(() => {
            this.setState({
                userName:'xzw',
            })
        }, 4000);
         
        return (
            <div>
                <PCHeader/>
            </div>
        )
    }
} 



ReactDOM.render((
    <BrowserRouter><Index/></BrowserRouter>  
)

, document.querySelector('#app'));
  