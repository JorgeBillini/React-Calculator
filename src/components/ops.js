import React from 'react';
import {Operation} from '../helpers/operations';
import '../app.css'

const bStyle ={
    padding:`20px 50px 10px 50px`,
    fontSize:`30px`,
 
 }

 /*
    const {displayVal, previousVal, operation, waitingForNewValue} = this.state;

// gotta pass the state, and do the conditionals in the numbers.js
if(num is clicked){
    if(!displayVal){
        this.setState({displayVal: num})
    } else {
        const newDisplayValue = displayVal + num;
        this.setState({displayVal: newDisplayValue,)
    }


    this.setState({previousVal:displayVal, displayVal:newNum, waitingForNewValue:false})

}

*/

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

    handleOperation = (e) => {
        const {state} = this.props;
        const {displayVal, previousVal, operation, waitingForNewValue} = state;
        const opStr = e.target.value;

        if(opStr){
            if(state.displayVal && state.previousVal && !state.waitingForNewValue){
                const result = Operation.result(displayVal, previousVal, opStr);

                this.props.addOperation({result, opStr});
            }
        }
        //if ('='){
            //take last op, and use pv, and dv with result
        //}

    }

    render(){
        return (
            <>
            <div className='row'>
                <button className='btn bg-warning btn-sm' onClick={this.handleOperation} value={'/'} style={bStyle}>/</button>
            </div>
            <div className= 'row'>
                <button className='btn bg-warning btn-sm' onClick={this.handleOperation} value={'*'} style={bStyle}>*</button>
            </div>
            <div className= 'row'>
                <button className='btn bg-warning btn-sm' onClick={this.handleOperation} value={'+'} style={bStyle}>+</button>
            </div>
            <div className='row'>
                <button className='btn bg-warning btn-sm' onClick={this.handleOperation} value={'-'} style={bStyle}>-</button>
            </div>

            
            </>
        );
    } 
}

export default Ops;