import React, { Component } from "react";

class Message extends Component {

    constructor() {
        //this is the base class constructor call
        super()

        //inital state
        this.state = {
            message: "Original Message"
        }
    }
    //change the state of message with  a click handler
    changeMessage() {
        this.setState({
            message: "it is now changed"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change message</button>
            </div>
        )
    } 
}

export default Message