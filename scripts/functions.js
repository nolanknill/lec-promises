const sportsTeam = {
    name: "Toronto Light Salmons",
    players: ["Yakiv", "Lamisa", "Bina", "Eddie", "Nicole"],
    aptitude: 100,
};

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

function asyncPromiseFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            1 === generateRandomNumber(1, 2) ? 
                resolve("Successfully resolved promise") 
                : 
                reject({error:"The thing I promised you ran into an error!"});
        }, generateRandomNumber(1000, 10000));
    });
}

function getLightSalmons() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sportsTeam);
        }, generateRandomNumber(250, 5000));
    });
}

function getLightSalmons() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error: "Unable to process request" });
        }, generateRandomNumber(250, 5000));
    });
}