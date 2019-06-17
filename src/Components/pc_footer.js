import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';


const Footer = styled(Col)`
    text-align:center;
`

export default class PCFooter extends React.Component{

    render() {
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Footer span={20} className="footer">
                     &copy;&nbsp;2019 Cyrus. All Rights Reserved.
                    </Footer>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }

}