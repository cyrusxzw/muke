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
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const myFetch = {
                    method: 'GET',
                };
                const formData = this.props.form.getFieldsValue();
                fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+ formData.r_userName +"&r_password=" + formData.r_password +"&r_confirmPassword=" + formData.r_confirmPassword, myFetch).
                then(response=>response.json()).then(json=>{
                    this.setState({
                        userName:json.NickUserName,
                        userid:json.UserId,
                    });
                });
                message.success("Request Success!");
                this.setModalVisible(false);
                this.props.form.resetFields();
                console.log('Received values of form: ', values);
            }
          });
    }

    render(){
        const { TabPane } = Tabs;
        const {getFieldDecorator} = this.props.form;
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
                            <Form.Item label="Username">
                            {getFieldDecorator('r_userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />,
                             )}
                            </Form.Item>
                            <Form.Item label="Password">
                            {getFieldDecorator('r_password', {
                                rules: [{ required: true, message: 'Please input your password!' }],
                                })(
                                <Input type="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Password"
                                />,
                             )}
                            </Form.Item>
                            <Form.Item label="Confirm Password">
                            {getFieldDecorator('r_confirmPassword', {
                                rules: [{ required: true, message: 'Please input passsword again!' }],
                                })(
                                <Input type="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Confirm Password"
                                />,
                             )}
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