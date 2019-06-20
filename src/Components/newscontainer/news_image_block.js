import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link, Route } from 'react-router-dom';

export default class NewsImageBlock extends React.Component{

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
            <div key={index} className="imageblock">
            <Link to={`details/${newsItem.uniquekey}`} target="_blank" className="left-news-card">
                <div className="custom-image">
                    <img src={newsItem.thumbnail_pic_s} alt=""/>
                </div>
                <div className="custom-card">
                    <h3>{newsItem.title}</h3>
                    <p>{newsItem.author_name}</p>
                </div>
            </Link>
        </div>
        ))
        :"No News Loaded";
        return(
            <div className="topNewsList left">
                <Card title={this.props.cardTitle}  bordered={true} style={{width: this.props.width}}>
                    {newsList}
                </Card>
            </div>
        )
    }

}