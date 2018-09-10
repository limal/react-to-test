// return a list of "can go" venues
export const getOutputVenues = (users, venues, filteredUsers) => {
    // get all participating users
    const goingUsers = users.filter(user => filteredUsers.includes(user.name))

    // check for drinks
    let canGoVenues = venues.filter(venue => goingUsers.reduce((acc, user) => acc && user.drinks.some(drink => venue.drinks.includes(drink)), true))

    return {
        canGoVenues,
        processed: true
    }
}