getLightSalmonsResolved()
    .then((result) => {
        console.log("success callback", result);
        displayTeam(result);

        console.log(result.players[0]);
        return getLightSalmonPlayer(result.players[0]);
    })
    .then((result) => {
        displayPlayerSpotlight(result);
    })
    .catch((error) => {
        console.log("error callback: ", error);
        displayErrorMessage(error);
    });


getLightSalmonPlayer("Nolan")
    .then((result) => {
        console.log("success callback", result);
    })
    .catch((error) => {
        console.log("Error callback", error);
    })

/*
    <span>There was an issue retrieving team information</span>
    <span>Error: Error message </span>
*/

function displayErrorMessage(error) {
    const errorEl = document.createElement("section");

    const infoEl = document.createElement("p");
    infoEl.innerText = "There was an issue retrieving team information";
    const detailedInfoEl = document.createElement("p");
    detailedInfoEl.innerText = error.error;
    errorEl.appendChild(infoEl);
    errorEl.appendChild(detailedInfoEl);

    document.querySelector("body").appendChild(errorEl);
}

function displayPlayerSpotlight(player) {
    const playerEl = document.createElement('article');
    
    const nameEl = document.createElement("h2");
    nameEl.innerText = player.name;
    const positionEl = document.createElement("span");
    positionEl.innerText = player.position;
    const numberEl = document.createElement("span");
    numberEl.innerText = player.number;

    playerEl.appendChild(nameEl);
    playerEl.appendChild(positionEl);
    playerEl.appendChild(numberEl);
    
    document.querySelector("body").appendChild(playerEl);

}
/*

<section>
    <h2>Team: {teamName}</h2>
    <span>Aptitude: {teamAptitude}</span>
    <h3>Players</h3>
    <ul>
        <li></li>
    </ul>
</section>
*/



function displayTeam(team) {
    const teamEl = document.createElement("section");
    const teamNameEl = document.createElement("h2");
    teamNameEl.innerText = `Team: ${team.name}`;
    const teamAptitudeEl = document.createElement("span");
    teamAptitudeEl.innerText = `Aptitude: ${team.aptitude}`;

    const playersEl = document.createElement("ul");
    team.players.forEach(player => {
        const playerEl = document.createElement("li");
        playerEl.innerText = player;
        playersEl.appendChild(playerEl);
    });
    
    teamEl.appendChild(teamNameEl);
    teamEl.appendChild(teamAptitudeEl);
    teamEl.appendChild(playersEl);

    document.querySelector("body").appendChild(teamEl);
}

