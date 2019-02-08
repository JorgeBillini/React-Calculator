import React from 'react';
// import  from '../helpers/operations'
//this.props.datalol.displayVal
const bStyle ={
    padding:`20px 50px 10px 50px`,
    fontSize:`30px`,
 
 }
class ExtraOps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isThereDisplay: false
        }
    }
    HandleAcClick = () =>{
        let newDisplayVal = 0;
        this.props.ACevent(newDisplayVal)
        
    }
    
    HandlePercentage = () =>{
        console.log(this.props.displayVal)
        let newDisplayVal = this.props.displayVal / 100;
        this.props.Percevent(newDisplayVal);
    }
    HandlePositiveNegative = () =>{
        console.log(typeof(this.props.displayVal))
        let newDisplayVal = this.props.displayVal * -1;
        this.props.PlusMinusEvent(newDisplayVal);
    }
    render (){
        return (
            <>
            <button className='button' onClick={this.HandleAcClick} > AC</button>
            <button className='button' onClick={this.HandlePercentage} > % </button>
            <button className='button' onClick={this.HandlePositiveNegative} >±</button>

        </>
        )
        
    }
}

export default ExtraOps;