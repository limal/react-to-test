// return a list of "can go" venues
export const getOutputVenues = (users, venues, filteredUsers) => {
    // get all participating users
    const goingUsers = users.filter(user => filteredUsers.includes(user.name))

    let canGoVenues = venues
        // check for drinks    
        .filter(venue => goingUsers.reduce((acc, user) => acc && user.drinks.some(drink => venue.drinks.includes(drink)), true))
        // check for food
        .filter(venue => goingUsers.reduce((acc, user) => acc && venue.food.filter(food => !user.wont_eat.includes(food)).length, true))

    return {
        canGoVenues,
        processed: true
    }
}