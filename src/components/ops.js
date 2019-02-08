import React from 'react';
import {result} from '../helpers/operations';
import '../app.css'
/* <p style={button}>*</p> */
const bStyle ={
    padding:`20px 50px 10px 50px`,
    fontSize:`30px`,
 
 }

class Ops extends React.Component {

    handleDivision = () => {
        
        this.props.addOperation('/');
    }

    handleMultiply = () => {
        this.props.addOperation('*');
    }

    handleAddition = () => {
        this.props.addOperation('+');
    }

    handleSubtract = () => {
        this.props.addOperation('-');
    }


    render(){
        return (
            <>
            <button className='button' onClick={this.handleDivision} >/</button>
            <button className='button' onClick={this.handleMultiply} >X</button>
            <button className='button' onClick={this.handleAddition} >+</button>
            <button className='button' value={'-'} onClick={this.handleSubtract}>-</button>

            
            </>
        );
    } 
}

export default Ops;