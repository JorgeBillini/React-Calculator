import React from 'react';

const bStyle ={
    padding:`20px 50px 10px 50px`,
    fontSize:`30px`,
    color:'black'
 }

class Numbers extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <button className='button' style={bStyle}>{this.props.num}</button>

            
        )
    } 
}

export default Numbers;