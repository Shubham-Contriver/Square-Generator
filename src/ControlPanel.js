import React, { Component } from 'react'
import "./App.css"
class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_text: "10",
        }
    }

    handleChange(e) {
        this.setState({ user_text: parseInt(e.target.value) })
    }
    changeNumberOfSquare() {
        const { clicked } = this.props
        clicked(this.state.user_text)
    }

    /**
     * 
     */
    changeOrientation() {
        const { changeOrientation } = this.props
        changeOrientation()
    }

    render() {
        return (<div className="Control_Main">
            <input style={{ marginTop: "5px" }} type="text" onChange={(e) => this.handleChange(e)} />
            <button style={{ marginTop: "5px" }} onClick={this.changeNumberOfSquare.bind(this)}>Generate Square</button>
            <button style={{ marginTop: "5px" }} onClick={this.changeOrientation.bind(this)}>Change Orientation</button>
        </div>
        )
    }
}
export default ControlPanel

