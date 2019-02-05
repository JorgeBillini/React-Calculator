import React from 'react';
// import  from '../helpers/operations'
//this.props.datalol.displayVal
const bStyle ={
    padding:`20px 50px 10px 50px`,
    fontSize:`150px`,
 
 }
class ExtraOps extends React.Component{
    constructor(props){
        super(props);
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
    render (){
        return (
            <>
            <button className='btn bg-warning btn-sm' onClick={this.HandleAcClick} style={bStyle}> AC</button>
            <button className='btn bg-warning btn-sm' onClick={this.HandlePercentage} style={bStyle}> %  </button>
            <h1>±</h1>
        </>
        )
        
    }
}

export default ExtraOps;