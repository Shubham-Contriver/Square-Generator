import React, { Component } from 'react'

 class ControlPanel extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            user_text: "10"
        }
        
    }
    
   handleChange(e) {
       this.setState({user_text:parseInt(e.target.value)})
       
   }


//function orient new
changeOrientation(){
    this.props.handleChangeOrientation()
    }
 // Done new change number of square  orientation 
 changeNumberOfSquare(){
    // old  this.props.Clicked(parseInt(this.state.user_text))
 this.props.Clicked(this.state.user_text)
 

 }
    render() {
         return ( <div>
                <input  type="text" onChange= {this.handleChange.bind(this)}/>
         <button onClick = {this.changeNumberOfSquare.bind(this)}>Click</button>
         <button onClick = {this.changeOrientation.bind(this)}>Click Change</button>   
             
            </div>
        )
    }
 }
export default ControlPanel
