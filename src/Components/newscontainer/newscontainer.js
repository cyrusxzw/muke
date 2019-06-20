import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import NewsBlock from './news_block';
import NewsImageBlock from './news_image_block';
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
                 <Col span={20}>
                     <div className="container">
                     <LeftContainer>
                        <div className="carousel">
                            <Carousel autoplay>
                                <div><img src="../src/img/1.jpg"/></div>
                                <div><img src="../src/img/2.jpg"/></div>
                                <div><img src="../src/img/3.jpg"/></div>
                                <div><img src="../src/img/4.jpg"/></div>
                            </Carousel>
                        </div>
                        <NewsImageBlock count="6" type="guoji" width="400px" cardTitle="International"></NewsImageBlock>
                     </LeftContainer>
                     <Tabs className="tabs_news">
                         <TabPane tab="News" key="1">
                                <NewsBlock count="20" type="top" width="100%" bordered="false"/>
                         </TabPane>
                         <TabPane tab="International" key="2">
                                <NewsBlock count="20" type="guoji" width="100%" bordered="false"/>
                         </TabPane>
                     </Tabs>
                     </div>
                     <div className="home-three-part">
                        <NewsImageBlock count="8" type="guonei" width="100%" cardTitle="Domestic"></NewsImageBlock>
                        <NewsImageBlock count="16" type="yule" width="100%" cardTitle="Fashion"></NewsImageBlock>
                     </div>
                 </Col>
                 <Col span={2}></Col>
             </Row>
         </div>
        )
    }
}