import React from 'react';
import Operation from '../helpers/operations';
import '../app.css'

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
        let opStr = e.target.value;
        this.props.addOperation(opStr);
    }

    render() {
        return (
            <>
                <button className='button orange' onClick={this.handleOperation} value={'/'}>/</button>
                <button className='button orange' onClick={this.handleOperation} value={'*'}>*</button>
                <button className='button orange' onClick={this.handleOperation} value={'+'}>+</button>
                <button className='button orange' onClick={this.handleOperation} value={'-'}>-</button>
            </>
        );
    } 
}

export default Ops;