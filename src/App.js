import React, { Component } from 'react'
import ControlPanel from './ControlPanel';
import Square from './Square';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num_squares: 10,
            orientation: "top_right"
        }
       
        console.log(this.state);
    }

    changeNumSquares = (num) => {
        this.setState({ num_squares: num })
    }

    handleChangeOrientation() {
        if (this.state.orientation === "top_right") {
            this.setState({ orientation: "top_left" })
            return
        }
        if (this.state.orientation === "top_left") {
            this.setState({ orientation: "bottom_left" })
            return
        }
        if (this.state.orientation === "bottom_left") {
            this.setState({ orientation: "bottom_right" })
            return
        }
        if (this.state.orientation === "bottom_right") {
            this.setState({ orientation: "top_right" })
            return
        }
    }

    render() {
        var temp_array = []
        for (let i = 0; i < this.state.num_squares; i++) {
            temp_array.push(1)
        }
        return (
            <div >
                {temp_array.map((item, index) => {
                    return <Square key={index}
                        orientation={this.state.orientation}>{item}</Square>
                })}

                {/* props callback example (Clicked, ChangeOrientation) */}
                {/* props callback with Arguments example -:changeNumSquares) */}
                <ControlPanel clicked={this.changeNumSquares}
                    changeOrientation={() => this.handleChangeOrientation()} />
            </div>
        )
    }
}

