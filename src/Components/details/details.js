import React from 'react';
import { Row, Col } from 'antd';


export default class Details extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsItem:'',
        }
    }

    componentDidMount(){
        const fetchOption = {
            method: 'GET',
        };
        
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, fetchOption)
        .then(response=>response.json())
        .then(json => {
            this.setState({
                newsItem: json,
            });
            document.title = this.state.newsItem.title + "- React News";
        })
    }

    createMarkup(){
        return {
            __html: this.state.newsItem.pagecontent
        };
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="detail-container">
                        <div className="article-container" dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}