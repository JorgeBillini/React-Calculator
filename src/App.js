import React from 'react';
import ExtraOPs from './components/extraOps';
import Display from './components/display';
import Ops from './components/ops';
import Numbers from './components/numbers';
import Equal from './components/equal'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayVal : null,
            previousVal: null,
            operation: null,
            waitingForNewValue: false,
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
    resolveOperation = object => {
        const result = object;
        this.setState({
            displayVal: result, 
            previousVal: null, 
            operation: null, 
            waitingForNewValue: false})
    }
    addOperation = opStr => {
      if (this.state.operation){
          return;
      }
        this.setState({operation:opStr,waitingForNewValue:true})
        console.log(this.state)

    }
    arr= [9,8,7,6,5,4,3,2,1]

    
    // RM this
   
     numButtonClick = dvi =>{
         let dv = parseInt(dvi)
         if(!this.state.displayVal && !this.state.operation && !this.state.previousVal){
             this.setState({displayVal:dv})
         }
         else if (this.displayVal && !this.state.operation && !this.state.previousVal && !this.state.waitingForNewValue){
            let newDv = this.state.displayVal + dv;
            this.setState({displayVal:newDv})
         }
         else if (this.state.operation && this.state.waitingForNewValue === true) { 
             // waiting for new value is true
             let oldDisplayVal = this.state.displayVal
             this.setState({displayVal:dv,previousVal:oldDisplayVal})
         }
     
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
            <Equal props={{state:this.state,resolveOperation:this.resolveOperation}} />
            </div>
            
            </>
        );
    }
    
}

export default App;
