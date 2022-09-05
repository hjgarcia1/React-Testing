import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // let count = this.state.count + 1
        // this.setState({
        //     count: count
        // }, () => {
        //     //this was added as second parameter to the setState function since it needs to be executed
        //     //the state is changed. Changes to the state are asynchronus...this can either be an arrow
        //     //function or a call to a function
        //     console.log('Callback value ', this.state.count)
        // })

        //this is done if state depends on previous changes. The incrementFive function below calls the
        //increment function five times. The output needs to be five on each button click. The count is
        //still being incremented by one. This is because react groups similar changes to state together
        //and calls them all at the same time. In other words if changes need to happen step by step use 
        //the method below.
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter