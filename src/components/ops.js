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

    handleOperation = (opStr) => {
        this.props.addOperation(opStr);
    }

    render(){
        return (
            <>
            <button className='btn bg-warning btn-sm' onClick={this.handleDivision} style={bStyle}>/</button>
            <button className='btn bg-warning btn-sm' onClick={this.handleMultiply} style={bStyle}>X</button>
            <button className='btn bg-warning btn-sm' onClick={this.handleAddition} style={bStyle}>+</button>
            <button className='btn bg-warning btn-sm' onClick={this.handleSubtract} style={bStyle}>-</button>
            
            </>
        );
    } 
}

export default Ops;