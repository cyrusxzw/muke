import React from 'react';
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';
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
class PCHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current:"top",
            modalVisible: false,
            action: 'login',
            hasLogin: false,
            userName: "",
            userid: 0,
        };
    }

    setModalVisible(value){
        this.setState({
            modalVisible:value,
        });
    }

    handleClick(e){
        if(e.key == "register"){
            console.log(e.key);
            this.setState({
                current: "register",
                modalVisible: true,
            });
        }
        else {
            this.setState({
                current: e.key,
            });
        }
    }

    handleSubmit(e){

    }

    render(){
        const { TabPane } = Tabs;
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogin?<Menu.Item key="logout" className="register">
            <Button type="primary" htmlType="button">{this.state.userName}</Button>
            &nbsp;&nbsp;
            <Link to=""><Button type="dashed" htmlType="button">My Account</Button></Link>
            &nbsp;&nbsp;
            <Button type="ghost" htmlType="button">Logout</Button>
        </Menu.Item>:
        <Menu.Item key="register" className="register">
            <Icon type="appstore"/>Register/Login
        </Menu.Item>;
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
              <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
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
                {userShow}
              </Menu>
            <Modal 
                title="User" 
                wrapClassName="vertical-center-modal" 
                visible={this.state.modalVisible} 
                onCancel = {()=>this.setModalVisible(false)}
                onOk = {()=>this.setModalVisible(false)}
                okText = 'Closed'>
                <Tabs type="card">
                    <TabPane tab="Register" key="2">
                        <Form mode="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Item>
                                <Input placeholder="Please input username" {...getFieldProps('r_userName')}/>
                            </Form.Item>
                            <Form.Item label="Password">
                                <Input type="password" placeholder="Please input password" {...getFieldProps('r_password')}/>
                            </Form.Item>
                            <Form.Item label="Confirm Password">
                                <Input type="password" placeholder="Please confirm password" {...getFieldProps('r_confirmPassword')}/>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">Register</Button>
                        </Form>
                    </TabPane>
                    
                </Tabs>    

            </Modal>


          </Col>
          <Col span={2}></Col>    
      </Row>
      </header>
        )
    }
}

export default PCHeader = Form.create()(PCHeader);