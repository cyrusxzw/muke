import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link, Route } from 'react-router-dom';

export default class NewsBlock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            news:'',
        }
    }

    componentDidMount(){
        const fetchOption = {
            method: 'GET',
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+ this.props.type +"&count=" + this.props.count, fetchOption)
        .then(response=>response.json())
        .then(json=>this.setState({
            news: json,
        }))
    }

    render(){
        const { news } = this.state;
        //console.log(news);
        const newsList = news.length ? 
        news.map((newsItem, index)=>(
            <li key={index}>
            <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                {newsItem.title}
            </Link>
        </li>
        ))
        :"No News Loaded";
        return(
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }

}