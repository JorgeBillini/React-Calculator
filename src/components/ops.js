import React from 'react';
import {result} from '../helpers/operations';

/* <p style={button}>*</p> */
const fStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    // width: '500px',
    // flexDirection: 'column',
    postion:'right'
}

const pStyle = {
    fontSize: '200px',
    textAlign: 'center',
    color: '#52536d'

};

const dStyle = {
    margin: '20px 30px',
    width: '300px',
    height: '250px',
    // borderRadius: '30px',
    // border: '10px solid #52536d',
    borderLeft: '10px solid #52536d',
    borderBottom: '10px solid #52536d',
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
            <div style={fStyle}>

                <div className='' style={dStyle}>
                    <p onClick={this.handleDivision} style={pStyle}>/</p>
                </div>
                <div className='' style={dStyle}>
                    <p onClick={this.handleMultiply} style={pStyle}>*</p>
                </div>
                <div className='' style={dStyle}>
                    <p onClick={this.handleAddition} style={pStyle}>+</p>
                </div>
                <div className='' style={dStyle}>
                    <p onClick={this.handleSubtract} style={pStyle}>-</p>
                </div>

            </div>
            
            </>
        );
    } 
}

export default Ops;