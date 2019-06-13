import React from 'react';

export default class Input extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            value:"",
        };
    }


    setValue (value) {
        this.setState({
            value,
        })
    }
    
   render() {
        const { value } = this.state;
        const { addList } = this.props;
       return (
           
           <div>
               <input value={value} onChange={ ( { target : {value}} ) => this.setValue(value)}/>
               &nbsp;
               <button onClick={
                   (event)=>{
                        addList(value);
                   }
               }>Add</button>
           </div>    
       )
   }
}