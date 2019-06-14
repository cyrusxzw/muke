import React from 'react';
import { Row, Col } from 'antd';

const PCHeader = () => (
   <header>
      <Row>
          <Col span={2}></Col>
          <Col span={4}>
              <a href='/' className='logo'>
                  <img src="../src/img/chrome.png" alt="logo"/>
                  <span>ReactNews</span>
              </a>
          </Col>
          <Col span={2}></Col>    
      </Row>
   </header>
)

export default PCHeader;