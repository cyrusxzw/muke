import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Greeting from './Components/greeting';
import Input from './Components/input';
import styled from 'styled-components';
import './css/index.css';

const StyledLink = styled(Link)`
    display:block;
    margin:20px;
    text-decoration:none;
`;

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
                <Greeting />
                <Input addList={this.addList}/>
                <ul>
                    {
                        lists.map( (list, index) => {
                            return(
                                <li key={index}>{list}</li>
                            )
                          
                        })
                    }
                </ul>
                 <Switch>
                <Route exact path="/" render={
                      () => (
                          <div>
                              <StyledLink exact to="/header">Header</StyledLink>
                              <StyledLink exact to="/footer">Footer</StyledLink>
                          </div>
                      )

                }/>
                <Route exact path="/header" render={
                    () => (
                        <Header userid="1234" changeValue = {this.changeValue.bind(this)}/>
                    )
                }/>
                <Route exact path="/footer" render={
                    ()=>(
                        <div>
                        <Footer/>
                            <p>{`User Name: ${this.state.userName}`}</p>
                    <Greeting />
                </div>
                    )
                }/>
         
            </Switch>
            </div>
        )
    }
} 



ReactDOM.render((
    <BrowserRouter><Index/></BrowserRouter>  
)

, document.querySelector('#app'));
  