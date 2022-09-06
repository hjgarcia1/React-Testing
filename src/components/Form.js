import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topics: ''
        }
    }

    updateUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    updateComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    updateTopics = (event) => {
        this.setState({
            topics: event.target.value
        })
    }

    submit = (event) => {
        event.preventDefault()

        console.log('submitted')
    }

    render() {

        return (
            <div>
                <form onSubmit={this.submit}>

                    <div>
                        <label htmlFor="username">Username</label>
                        <br />
                        <input type="text" id="username" name="username" value={this.state.username} onChange={this.updateUsername} />

                        <p>The username value is: {this.state.username}</p>
                    </div>

                    <div>
                        <label htmlFor="comments">Comments</label>
                        <br />

                        <textarea id="comments" name="comments" value={this.state.comments} onChange={this.updateComments}>
                        </textarea>

                        <p>The comments value is: {this.state.comments}</p>
                    </div>

                    <div>
                        <label htmlFor="topic">Topics</label>
                        <br />

                        <select name='topics' id='topics' value={this.state.topics} onChange={this.updateTopics}>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                        </select>

                        <p>The Topics value is: {this.state.topics}</p>
                    </div>


                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form