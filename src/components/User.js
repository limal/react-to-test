import React, { Component } from 'react'

class User extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, username) {
        this.props.updateFilterUser(username, event.target.checked)
    }

    render() {
        const {
            filteredUsers,
            username
        } = this.props

        return (
            <div className="User">
                <label key={username}>
                    <input
                        name={username}
                        type="checkbox"
                        className="User__Input"
                        checked={filteredUsers.find(name => username === name)}
                        onChange={(event) => this.handleChange(event, username)} />
                    {username}
                </label>
            </div>
        )
    }
}

export default User