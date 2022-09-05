import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} and this component is ${childName}`)
    }

    render() {
        // method greetParent will passed as prop to child component
        return (
            <div>
                <ChildComponents greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent