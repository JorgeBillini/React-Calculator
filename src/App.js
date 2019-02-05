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
            displayVal : 1,
            previousVal: null,
            operation: null,
            waitingForNewValue: false,
        }
    }
    ACevent = dv =>{
    const {displayVal} = this.state;
    this.setState({displayVal:dv});
    }
    Percentageevent = dv =>{
        const {displayVal} = this.state;
        this.setState({displayVal:dv})
    }
    
    render(){
        console.log(this.state)
        return (
            <>
                {/* <Display /> */}
                <ExtraOPs ACevent={this.ACevent} Percentageevent={this.Percentageevent} />
                
                {/* <Ops /> */}
                {/* <Numbers />  */}
            </>
        );
    }
    
}

export default App;