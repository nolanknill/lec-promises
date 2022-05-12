/** Boilerplate promise:
    promise.then(
        (result) => {
            console.log("Fulfilled promise:", result);
        },
        (error) => {
            console.log("Rejected promise:", error);
        }
    );
*/

let getDataPromise = getLightSalmons();
// While promise is pending, synchronous code can be run
const loadingEl = document.createElement('p');
loadingEl.textContent = "Loading team information...";
document.querySelector('body').appendChild(loadingEl);

getDataPromise.then(
    // success callback
    (teamObject) => {
        console.log("Fulfilled promise:", teamObject);
        displayTeam(teamObject);
    },

    // error callback
    (error) => {
        console.log("Rejected promise:", error);
        displayErrorInformation(error);
    }
)

function displayTeam(teamObject) {
    // outputs this team information to the DOM

    // create element
    const teamNameEl = document.createElement("h2");
    teamNameEl.textContent = teamObject.name;

    const playersEl = document.createElement("ul");

    const players = teamObject.players;
    // loop so that we can add each player as a list item?
    players.forEach((player) => {
        console.log(player);

        const playerEl = document.createElement("li");
        playerEl.textContent = player;
        playersEl.appendChild(playerEl);
    })

    // create element
    const aptitudeEl = document.createElement("h3");
    aptitudeEl.textContent = "Aptitude: " + teamObject.aptitude;

    const bodyEl = document.querySelector('body');
    bodyEl.appendChild(teamNameEl);
    bodyEl.appendChild(playersEl);
    bodyEl.appendChild(aptitudeEl);
}

function displayErrorInformation(error) {
    const errorEl = document.createElement('p');
    errorEl.textContent = "Error loading team information: " + error.error;
    document.querySelector('body').appendChild(errorEl);
}