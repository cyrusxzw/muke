import React from 'react';
import { Row, Col, Button, Card, Form, Input} from 'antd';

class Comment extends React.Component{

    constructor(){
        super();
        this.state = {
            comments:''
        };
    }

    componentDidMount(){
        const fetchOption = {
            method: 'GET',
        };
        
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + 161028192307417, fetchOption)
        .then(response=>response.json())
        .then(json => {
            this.setState({
                comments: json,
            });
        })
    }

 
    handleSubmit(e){
        e.preventDefault();
        const fetchOption = {
            method: 'GET',
        };

        const formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="
        + localStorage.userid + "&uniquekey=" + 161028192307417 + "&comment=" + formdata.comment, fetchOption)
        .then(response=>response.json())
        .then(json => {
            this.props.form.setFieldsValue({
                comment: null,
            })
            this.componentDidMount();
        })
    };

    render(){
        const {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const commentsList = comments.length ? comments.map(
            (comment, index)=>{
                return(
                    <Card key={index} title={comment.UserName} extra={<a href="#">Published at {comment.datetime} </a>}>
                        <p>{comment.Comments}</p>
                    </Card>
                )
            }
        ) :
        'No Comments!'
        ;
        return(
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentsList}
                        <Form onSubmit = {this.handleSubmit.bind(this)}>
                            <Form.Item label="Comment">
                                {getFieldDecorator('comment', {
                                rules: [{ required: false, message: 'Please input your comment!' }],
                                })(
                                <Input 
                                type="textarea"
                                placeholder="something..."
                                />,
                             )}
                            </Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Comment = Form.create()(Comment);