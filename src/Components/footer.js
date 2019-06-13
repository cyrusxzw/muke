import React from 'react';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'red', 
        }
    }

    changeColor() {
        this.setState({
            color: 'white',
        })
    }

   render() {
        return (
            <footer>
                <div>
                    This is Footer.
                </div>
                <p>{this.state.color}</p>
                <input type='button' value='Change Color' onClick = {this.changeColor.bind(this)}/>
            </footer>
        )
   }
}