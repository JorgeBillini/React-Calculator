import React from 'react';
// import Operation from './helpers/operations';
import ExtraOPs from './components/extraOps';
import Display from './components/display';
// import Numbers from './components/numbers';
import Ops from './components/ops';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayVal : 0,
            previousVal: null,
            operation: null,
            waitingForNewValue: false,
        }
    }

    /*
    const {displayVal, previousVal, operation, waitingForNewValue} = this.state;


if(operation is clicked){
    if(operation && waitingForNewValue){

    }

    if(operation && waitingForNewValue){
        this.setState({operation: opStr})
    }

     this.setState({waitingForNewValue:true})
}

if(num is clicked){
    if(!displayVal){
        this.setState({displayVal: num})
    } else {
        const newDisplayValue = displayVal + num;
        this.setState({displayVal: newDisplayValue,)
    }

    this.setState({waitingForNewValue:false})
}

*/

    addOperation = (opStr) => {
        const {operation} = this.state;
        this.setState({operation: opStr});
      }

    render(){
        console.log(this.state);
        return (
            <>
                <Display displayVal={this.state.displayVal}/>
                {/* <ExtraOPs /> */}
                <Ops addOperation={this.addOperation}/>
                {/* <Numbers />  */}
            </>
        );
    }
    
}

export default App;