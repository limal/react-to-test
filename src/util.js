// return a list of "can go" venues
export const getOutputVenues = (users, venues, filteredUsers) => {
    // get all participating users
    const goingUsers = users.filter(user => filteredUsers.includes(user.name))

    let issues = {}

    for (const venue of venues) {
        issues[venue.name] = { // for each venue
            drinks: [], // keep a list of users with missing drinks...
            food: [] // ...and food
        }
    }

    let canGoVenues = venues
        // check each venue for drinks    
        .filter(venue => goingUsers.reduce((acc, user) => {
            const isDrink = user.drinks.some(drink => venue.drinks.includes(drink))

            if (!isDrink) {
                // note an issue with missing drinks for the currently checked user
                issues[venue.name].drinks.push(user.name)
            }

            return acc && isDrink
        }, true))
        // check each remaining venue for food
        .filter(venue => goingUsers.reduce((acc, user) => {
            const isFood = venue.food.filter(food => !user.wont_eat.includes(food)).length

            if (!isFood) {
                // note an issue with food for the currently checked user
                issues[venue.name].food.push(user.name)
            }

            return acc && isFood
        }, true))

    return {
        canGoVenues,
        issues
    }
}