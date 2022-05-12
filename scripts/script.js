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

let getDataPromise = getLightSalmonsResolved();

// While promise is pending, synchronous code can be run
const loadingEl = document.createElement("p");
loadingEl.textContent = "Loading team information...";
document.querySelector("body").appendChild(loadingEl);

getDataPromise
  .then(
    // success callback
    (teamObject) => {
      console.log("Fulfilled promise:", teamObject);
      displayTeam(teamObject);

      // getLightSalmonPlayer() returns a Promise!
      const getSinglePlayerPromise = getLightSalmonPlayer(
        teamObject.players[0]
      );

      return getSinglePlayerPromise;
    }
  )
  .then((playerInfo) => {
    /**
     * When the promise returned from the previous .then resolves, this .then
     * callback runs
     */
    console.log(playerInfo);
  })
  .catch(
    // error callback
    (error) => {
      console.log("Rejected promise:", error);
      displayErrorInformation(error);
    }
  );

/**
 * Given a team object, appends the information to the DOM!
 * @param object teamObject
 */
function displayTeam(teamObject) {
  const teamNameEl = document.createElement("h2");
  teamNameEl.textContent = teamObject.name;

  const playersEl = document.createElement("ul");

  const players = teamObject.players;
  players.forEach((player) => {
    const playerEl = document.createElement("li");
    playerEl.textContent = player;
    playersEl.appendChild(playerEl);
  });

  const aptitudeEl = document.createElement("h3");
  aptitudeEl.textContent = "Aptitude: " + teamObject.aptitude;

  const bodyEl = document.querySelector("body");
  bodyEl.appendChild(teamNameEl);
  bodyEl.appendChild(playersEl);
  bodyEl.appendChild(aptitudeEl);
}

function displayErrorInformation(error) {
  const errorEl = document.createElement("p");
  errorEl.textContent = "Error loading team information: " + error.error;
  document.querySelector("body").appendChild(errorEl);
}

// Promise1 is guaranteed to resolve
// Promise2 will resolve half the time
const promise1 = getLightSalmonsResolved();
const promise2 = getLightSalmons();
Promise.all([promise1, promise2])
  .then((values) => {
    // This .then() callback will run only if all promises are fulfilled
    console.log("Promise all resolved: ", values);
  })
  .catch((error) => {
    // This .catch() callback will run if ANY of the promises are unsuccesful
    console.log("One promise from Promise.all was unsuccessful: ", error);
  });
