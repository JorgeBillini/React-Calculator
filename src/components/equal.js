import Operation from '../helpers/operations'
import React from 'react'
const Equal = props =>{
    console.log(props)
    const handleOp = e =>{
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