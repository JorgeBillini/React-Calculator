import React from 'react';
// import  from '../helpers/operations'
//this.props.datalol.displayVal

class ExtraOps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isThereDisplay: false
        }
    }
    HandleAcClick = () =>{
        let newDisplayVal = '';
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
            <button className='button' onClick={this.HandleAcClick} >{this.props.displayVal ==='' ? 'AC':'C'}</button>
            <button className='button' onClick={this.HandlePercentage} > % </button>
            <button className='button' onClick={this.HandlePositiveNegative} >±</button>

        </>
        )
        
    }
}

export default ExtraOps;