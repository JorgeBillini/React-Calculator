import React from 'react';
import ExtraOPs from './components/extraOps';
import Display from './components/display';
import Ops from './components/ops';
import Numbers from './components/numbers';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayVal : "0",
            previousVal: null,
            operation: null,
            waitingForNewValue: true,
        }
    }
    
    ACevent = dv =>{
    this.setState({displayVal:dv});
    }
    Percevent = dv =>{
        this.setState({displayVal:dv})
    }
    PlusMinusEvent = dv => {
        this.setState({displayVal:dv})
    }
    addOperation = object => {
        const {result, opStr} = object;
        const {displayVal, previousVal, operation, waitingForNewValue} = this.state;
        this.setState({
            displayVal: result, 
            previousVal: null, 
            operation: opStr, 
            waitingForNewValue: true})
    }
    
    arr= [9,8,7,6,5,4,3,2,1]

    
    // RM this
   
     numButtonClick = dvi =>{
         let newPreviousVal = this.state.displayVal
         if (this.state.displayVal > 0) {
             this.setState({previousVal:newPreviousVal,displayVal:dvi})
         }
        else this.setState({displayVal:dvi})
         console.log(this.state)
    }
    render(){
        return (
            <>
             <Display displayVal={this.state.displayVal}/>
             <div className='container'>
             <div className='row-1 '>
             <ExtraOPs ACevent={this.ACevent} Percevent={this.Percevent} PlusMinusEvent={this.PlusMinusEvent} displayVal= {this.state.displayVal} />
             </div>
             <div className="container-num">
            {
                this.arr.map((e,i)=>{
                    return <Numbers props = {{num:e,numButtonClick:this.numButtonClick}} num={e} />
                })
            }
         </div>
            <div className='row-2'>
           <Ops addOperation={this.addOperation} state={this.state}/>

            </div>
            <button >RESOLVE</button>
            </div>
            
            </>
        );
    }
    
}

export default App;