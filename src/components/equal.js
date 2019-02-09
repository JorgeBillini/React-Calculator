import Operation from '../helpers/operations'
import React from 'react'
const Equal = props =>{
    const handleOp = e =>{
        console.log(props.props.state.displayVal)
        console.log(props.props.state.previousVal)
       let result =  Operation.result(props.props.state.displayVal,props.props.state.previousVal,props.props.state.operation);
        props.props.resolveOperation(result)
    }
    return(
        <>
        <button onClick={handleOp}>RESOLVE</button>
        </>
    )
}

export default Equal;