import React from 'react';
import { Row, Col, BackTop } from 'antd';
import NewsImageBlock from'../newscontainer/news_image_block';
import Comments from '../comment/comment'
import styled from 'styled-components';


const Content = styled(Col)`
    padding:20px 0;
`

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
        const usekey = this.props.match.params.uniquekey;
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Content span={13} className="detail-container">
                        <div className="article-container" dangerouslySetInnerHTML={this.createMarkup()}>
                        </div>
                        <Comments uniquekey={this.props.match.params.uniquekey}/>
                    </Content>
                    <Col span={1}></Col>
                    <Col span={6}>
                        <NewsImageBlock count="39" type="top" width="100%" cardTitle="Related News"></NewsImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <BackTop/>
            </div>
        )
    }
}