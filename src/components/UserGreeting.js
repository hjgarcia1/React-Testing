import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
        }
    }

    render() {
        // if (this.state.isLoggedIn)
        //     return (
        //         <div>welcome John Doe</div>
        //     )
        // else {
        //     return (
        //         <div>welcome Guest</div>
        //     )
        // }

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome John Doe</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return (
        //     <div>{message}</div>
        // )

        return this.state.isLoggedIn ? (<div>Welcome John Doe</div>) : (<div>Welcome Guest</div>
)
    }
}

export default UserGreeting