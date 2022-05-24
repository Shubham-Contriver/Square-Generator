import React from 'react'
import { Squ } from './StyledComp'

// function Sql (){
//     alert("hello")
// }
class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
                Dimension: ["120px","100px","80px"],
                X : ["top","bottom" ] ,
                Y : ["left","right" ] 
        }
       
    }
    PositX(){
        const PoseX = this.state.X
        return (
            PoseX[Math.floor(Math.random()*PoseX.length)]
        )
    }

    PositY(){
        const PoseY = this.state.Y
        return (
            PoseY[Math.floor(Math.random()*PoseY.length)]
        )
      
    }
     Dimens(){
        const Dimen = this.state.Dimension
       
       
        return  (
            Dimen[Math.floor(Math.random()*Dimen.length)]
        )
        
        }
    
 render() {
     
//   let X = this.state.X
//   X = this.PositX()
// console.log(X)
// let Y = this.state.Y
//   Y = this.PositY()
// console.log(Y)

     function bColor(){ 
        const ColorArr= ["black","orange","pink"]
        return (
           ColorArr[Math.floor(Math.random()*ColorArr.length)]
       )
        }
     
        const orient =  this.props.Orientation
        const Arrr = orient[Math.floor(Math.random()*orient.length)]
     console.log(Arrr + "Oreint");

     function orientChange (){

      
     }

    return (<div >

{(() => {
        switch (Arrr) {
          case 'topLeft':
            return <Squ  BackgroundColor={bColor()}Width = {this.Dimens()} Height = {this.Dimens()}/>
          case 'topRight':
            return <Squ  BackgroundColor={bColor()} Width = {this.Dimens()} Height = {this.Dimens()} />
          case 'bottomLeft':
            return <Squ BackgroundColor={bColor()}Width = {this.Dimens()} Height = {this.Dimens()}/>
          case 'bottomRight':
            return <Squ  BackgroundColor={bColor()} Width = {this.Dimens()} Height = {this.Dimens()}/>
          default:
            return null
        }
      })()}
        
       {/* <Squ   style = {{color:"blue"}} Width = {this.Dimens()} Height = {this.Dimens()} BackgroundColor = {bColor()}>Square</Squ> />; */}
       
        
   
       </div>

)

}
}
export default Square