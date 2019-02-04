import React from 'react';
//this.props.datalol.displayVal
class ExtraOps extends React.Component{
    constructor(props){
        super(props);
    }
    HandleAcClick = () =>{
        let newDisplayVal = 0;
        this.props.ACevent(newDisplayVal)
    }
    render (){
        return (
            <>
            <button className='btn bg-warning btn-sm' onClick={this.HandleAcClick} />
            <h1>%</h1>
            <h1>±</h1>
        </>
        )
        
    }
}

export default ExtraOps;