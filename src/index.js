import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PCHeader from './Components/pc_header';
import PCFooter from './Components/pc_footer';
import 'antd/dist/antd.css'; 
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
                <PCFooter/>
            </div>
        )
    }
} 



ReactDOM.render((
    <BrowserRouter><Index/></BrowserRouter>  
)

, document.querySelector('#app'));
  