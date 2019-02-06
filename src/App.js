import React from 'react';
// import Operation from './helpers/operations';
import ExtraOPs from './components/extraOps';
import Display from './components/display';
// import Numbers from './components/numbers';
import Ops from './components/ops';
import Numbers from './components/numbers'
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayVal : 100,
            previousVal: null,
            operation: null,
            waitingForNewValue: false,
        }
    }
    ACevent = dv =>{
    const {displayVal} = this.state;
    this.setState({displayVal:dv});
    }
    Percevent = dv =>{
        const {displayVal} = this.state;
        this.setState({displayVal:dv})
    }
    PlusMinusEvent = dv => {
        const {displayVal} = this.state;
        this.setState({displayVal:dv})
    }
    addOperation = operator =>{
        const newOperation = operator
        this.setState({operation:operator})
    }
     arr= [9,8,7,6,5,4,3,2,1]

    render(){
        console.log(this.state)
        return (
            <>
             <Display displayVal={this.state.displayVal}/>
             <Ops addOperation={this.addOperation}/>
             <ExtraOPs ACevent={this.ACevent} Percevent={this.Percevent} PlusMinusEvent={this.PlusMinusEvent} displayVal= {this.state.displayVal} />
            <div className='row'>
            <Numbers className='col' num={7} />
            <Numbers className='col' num={8} />
            <Numbers className='col' num={9} />
            </div>
            <div className='row'>
            <Numbers className='col' num={4} />
            <Numbers className='col' num={5} />
            <Numbers className='col' num={6} />
            </div>
            <div className='row'>
            <Numbers className='col' num={1} />
            <Numbers className='col' num={2} />
            <Numbers className='col' num={3} />
            </div>
            <div className='row'>
            <Numbers className='col' num={0} />
            <Numbers className='col' num={'.'} />
            
            </div>
            
            
            
            
            
           
            
            </>
        );
    }
    
}

export default App;