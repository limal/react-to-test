import React, { Component } from 'react'
import { users, venues } from '../data'
import User from './User'
import { getOutputVenues } from '../util'

class TimeOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filteredUsers: [], // an array of selected users
            results: {}
        }

        this.updateFilterUser = this.updateFilterUser.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
    }

    updateFilterUser(username, checked) {
        // by default remove a user that's about to be added/removed
        let filteredUsers = this.state.filteredUsers.filter(name => name !== username)

        if (checked) {
            // add a user if a checkbox is selected
            filteredUsers.push(username)
        }

        const results = getOutputVenues(users, venues, filteredUsers)

        this.setState({
            filteredUsers,
            results
        })
    }

    render() {
        const {
            filteredUsers,
            results
        } = this.state

        const Issue = ({ venueName, issues }) => <li>
            {venueName}
            <ul>
                {issues.drinks.map(user => <li>There is nothing for {user} to drink</li>)}
                {issues.food.map(user => <li>There is nothing for {user} to eat</li>)}
            </ul>
        </li>

        return (
            <div className="TimeOut">
                <div className="TimeOut__Input">
                    <h2 className="TimeOut__Headline">Please select who is going out</h2>
                    {users.map(user => <User username={user.name} filteredUsers={filteredUsers} updateFilterUser={this.updateFilterUser} />)}
                </div>
                <div className="TimeOut__Output">
                    <h2 className="TimeOut__Headline">Places to go</h2>
                    <ul>
                        {venues.filter(venue => results.canGoVenues && results.canGoVenues.includes(venue)).map(venue => <li>{venue.name}</li>)}
                    </ul>
                    <h2 className="TimeOut__Headline">Places to avoid</h2>
                    <ul>
                        {Object.keys(results.issues || {}).map(venueName => results.issues[venueName].isIssue && <Issue venueName={venueName} issues={results.issues[venueName]} />)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TimeOut