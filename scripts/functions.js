const sportsTeam = {
    name: "Toronto Light Salmons",
    players: ["Yakiv", "Lamisa", "Bina", "Eddie", "Nicole"],
    aptitude: 100,
};

const detailedPlayerInfo = [
    {
        name: "Yakiv",
        position: "Skip",
        number: 4
    },
    {
        name: "Lamisa",
        position: "Lead",
        number: 3
    },
    {
        name: "Nicole",
        position: "Spinner",
        number: 2
    },
    {
        name: "Eddie",
        position: "Rock Thrower",
        number: 1
    },
    {
        name: "Bina",
        position: "Reserve",
        number: 5
    },
];

/**
 * Generates a random number between a 
 * specified range
 * 
 * @param Number min
 * @param Number max 
 * @return Number Randomly generated number
 */
 function generateRandomNumber(min, max) {
    let range = max - min;

    return Math.round(Math.random() * range) + min;
}

/**
 * Randomly resolves or rejects half the time
 * 
 * @returns Promise
 */
function asyncPromiseFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            1 === generateRandomNumber(1, 2) ? 
                resolve("Successfully resolved promise") 
                : 
                reject({error:"The thing I promised you ran into an error!"});
        }, generateRandomNumber(1000, 1500));
    });
}


/**
 * 50% chance of resolving or rejecting. 
 * Calls getLightSalmonsResolved() or getLightSalmonsRejected()
 * 
 * @returns Promise contains sportsTeam object
 */
function getLightSalmons() {
    if (1 === generateRandomNumber(1, 2)) {
        return getLightSalmonsResolved();
    } else {
        return getLightSalmonsRejected();
    }
}

/**
 * Attempts to find player information by a passed player's name. 
 * Promise resolves if the player is found
 * Promise rejects if the player is not found
 * 
 * @param string playerName 
 * @returns Promise
 */
function getLightSalmonPlayer(playerName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundPlayer = detailedPlayerInfo.find(player => player.name === playerName );
            (foundPlayer) ? resolve(foundPlayer) : reject({ error: "Unable to find player with that name"});
        }, generateRandomNumber(1000, 1500));
    });
}

/**
 * Returns sportsTeam object randomly between 100 - 1500 seconds
 * 
 * @returns Promise contains sportsTeamObject
 */
function getLightSalmonsResolved() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sportsTeam);
        }, generateRandomNumber(1000, 1500));
    });
}

/**
 * Returns an always-rejected promise (for testing purposes)
 * 
 * @returns Promise 
 */
function getLightSalmonsRejected() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: "Unable to process request" });
        }, generateRandomNumber(1000, 1500));
    });
}

