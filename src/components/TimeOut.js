import React, { Component } from 'react'
import { users, venues } from '../data'
import User from './User'
import { getOutputVenues } from '../util'

class TimeOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filteredUsers: [] // an array of selected users
        }

        this.updateFilterUser = this.updateFilterUser.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(getOutputVenues(users, venues, this.state.filteredUsers))
    }

    updateFilterUser(username, checked) {
        // by default remove a user that's about to be added/removed
        let filteredUsers = this.state.filteredUsers.filter(name => name !== username)

        if (checked) {
            // add a user if a checkbox is selected
            filteredUsers.push(username)
        }

        this.setState({
            filteredUsers
        })
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