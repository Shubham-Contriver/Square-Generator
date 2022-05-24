import React from 'react'
import { Squ } from './StyledComp'

// function Sql (){
//     alert("hello")
// }
const dimensions = [120, 100, 80];
const x = [200, 400, 600];
const y = [200, 400, 600];

class Square extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      dimension: this.getDimension(),
      x: this.getX(),
      y: this.getY(),
    }
  }

  getRandomElementFromArray(arrays) {
    return (
      arrays[Math.floor(Math.random() * arrays.length)]
    )
  }
  getX() {
    let arrX = this.getRandomElementFromArray(x)
    return arrX
  }
  getY() {
    let arrY = this.getRandomElementFromArray(y)
    return arrY
  }
  getDimension() {
    let arrVal = this.getRandomElementFromArray(dimensions)
    return arrVal
  }

  bColor() {
    const colorArr = ["#FFE6E6", "#FF2626", "#BD1616"]
    var bg = colorArr[Math.floor(Math.random() * colorArr.length)]
    return (bg);
  }
  render() {
    return (
      <Squ orientation={this.props.orientation} dimension={this.state.dimension}
        x={this.state.x} y={this.state.y}
        backgroundColor={this.bColor} />
    )
  }
}
export default Square