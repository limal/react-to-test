import React, { Component } from 'react'
import { users, venues } from '../data'
import User from './User'

class TimeOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filteredUsers: []
        }

        this.updateFilterUser = this.updateFilterUser.bind(this)
    }

    updateFilterUser(username, checked) {
        console.log(username, checked)
    }

    render() {
        const {
            filteredUsers
        } = this.state

        return (
            <div className="TimeOut">
                <div className="TimeOut__Input">
                    <h2 className="TimeOut__Headline">Please select who is going out</h2>
                    {users.map(user => <User username={user.name} filteredUsers={filteredUsers} updateFilterUser={this.updateFilterUser}/>)}
                </div>
                <div className="TimeOut__Output">
                    <h2 className="TimeOut__Headline">Places to go</h2>
                    <ul>
                        {venues.map(venue => <li>{venue.name}</li>)}
                    </ul>
                    <h2 className="TimeOut__Headline">Places to avoid</h2>
                    <ul>
                        {venues.map(venue => <li>{venue.name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TimeOut