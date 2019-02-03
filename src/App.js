import React from 'react';
import Operation from './helpers/operations';
import ExtraOPs from './components/extraOps'
import Display from './components/display';
import Numbers from './components/numbers';
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

    render(){
        return (
            <>
                <Display />
                <ExtraOPs />
                <Ops />
                <Numbers /> 
            </>
        );
    }
    
}

export default App;