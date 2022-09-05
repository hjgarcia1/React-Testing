import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        //this is "React Way" of binding an event handler
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>

                {/* this can have performance issues if the changes in state occur it causes 
                    the component to re-render
                */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* this can have performance issues */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* binding is in the constructor  or an arrow function */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind