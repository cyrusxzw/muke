import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Img = styled.img`
    width: 48px;
    height:48px;
`

const Title = styled.span`
    font-size: 24px;
    padding-left: 5px;
`
const NavLink = styled(Link)`
    text-decoration:none;
    display: flex;
    align-items: center;
`
export default class PCHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current:"top",
        };
    }

    render(){
        return(
        <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
              <NavLink exact='true' to='/' className='logo'>
                  <Img src="../src/img/chrome.png" alt="logo"/>
                  <Title>ReactNews</Title>
              </NavLink>
          </Col>
          <Col span={16}>
              <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                <Menu.Item key="top">
                    <Icon type="appstore"/>Top
                </Menu.Item>
                <Menu.Item key="shehui">
                    <Icon type="appstore"/>Social
                </Menu.Item>
                <Menu.Item key="guonei">
                    <Icon type="appstore"/>Australia
                </Menu.Item>
                <Menu.Item key="guoji">
                    <Icon type="appstore"/>International
                </Menu.Item>
                <Menu.Item key="tiyu">
                    <Icon type="appstore"/>Sports
                </Menu.Item>
                <Menu.Item key="keji">
                    <Icon type="appstore"/>IT
                </Menu.Item>
                <Menu.Item key="shishang">
                    <Icon type="appstore"/>Fashion
                </Menu.Item>
              </Menu>
          </Col>
          <Col span={2}></Col>    
      </Row>
      </header>
        )
    }
}
