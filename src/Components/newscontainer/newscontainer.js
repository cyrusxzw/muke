import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import NewsBlock from './news_block';
import styled from 'styled-components';
import './newscontainer.css';

const LeftContainer = styled.div`
    width: 400px;
    float: left;
`

const { TabPane } = Tabs;
export default class Newscontainer extends React.Component{

    render(){

        return(
         <div>
             <Row>
                 <Col span={2}></Col>
                 <Col span={20} className="container">
                     <LeftContainer>
                        <div className="carousel">
                            <Carousel autoplay>
                                <div><img src="../src/img/1.jpg"/></div>
                                <div><img src="../src/img/2.jpg"/></div>
                                <div><img src="../src/img/3.jpg"/></div>
                                <div><img src="../src/img/4.jpg"/></div>
                            </Carousel>
                        </div>
                     </LeftContainer>
                     <Tabs className="tabs_news">
                         <TabPane tab="News" key="1">
                                <NewsBlock count="20" type="top" width="100%" bordered="false"/>
                         </TabPane>
                     </Tabs>
                 </Col>
                 <Col span={2}></Col>
             </Row>
         </div>
        )
    }
}