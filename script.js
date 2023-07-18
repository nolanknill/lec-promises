const SHOWS_ENDPOINT = "https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/shows";

/*
    // Send a request to API to GET the data!

    // .then -> call displayShows, send that function the shows array
    // .catch -> displayFetchError()
    displayShows();
*/
axios
    .get(SHOWS_ENDPOINT)
    .then((response) => {
        clearShows();
        const tvShows = response.data;
        displayAllShows(tvShows);
    })
    .catch((error) => {
        console.log(error);
        clearShows();
        displayFetchError();
    });

/**
 * Clear TV shows from DOM
 */
function clearShows() {
    const tvShowsEl = document.getElementById("tv-shows");
    tvShowsEl.innerHTML = "";
}

/**
 * Show an error if shows can not be fetched
 */
function displayFetchError() {
    const showsEl = document.getElementById("tv-shows");
    
    const errorEl = document.createElement("span");
    errorEl.innerText = "Service unavailable. Please try again later";

    showsEl.appendChild(errorEl);
}


/**
 * Add all TV Shows to the tv-shows element
 */
function displayAllShows(shows) {
    const showsEl = document.getElementById("tv-shows");
    shows.forEach((show) => {
        const showEl = createTvShowElement(show);
        showsEl.appendChild(showEl);
    });
}


/**
 * 
 * @param {}: title, rating, image_src
 * @returns HTMLElement article
 *      <article class="tv-show">
 *          <h2 class="tv-show__title">${show.title}</h2
 *          <span class="tv-show__rating">Rating: ${show.rating}</span>
 *          <img class="tv-show__cover" src="${show.imageSrc}" alt="${show.title} Cover" />
 *      </article>
 */
function createTvShowElement(show) {
    const showEl = document.createElement("article");
    showEl.classList.add("tv-show");

    const titleEl = document.createElement("h2");
    titleEl.classList.add("tv-show__title");
    titleEl.innerText = show.title;

    const ratingEl = document.createElement("span");
    ratingEl.classList.add("tv-show__rating");
    ratingEl.innerText = "Rating: " + show.rating;
    
    const coverEl = document.createElement("img");
    coverEl.classList.add("tv-show__cover");
    coverEl.setAttribute("src", show.image_src);
    coverEl.setAttribute("alt", show.title + " Cover");
    
    showEl.appendChild(titleEl);
    showEl.appendChild(ratingEl);
    showEl.appendChild(coverEl);

    showEl.addEventListener("click", () => {
        const activeShow = document.querySelector(".tv-show--active");
        // activeShow will either be null (falsey) or an object (truthy)

        console.log(activeShow);
        console.log(showEl);
        if (activeShow && showEl !== activeShow) {
            activeShow.classList.remove("tv-show--active");
        }
        
        showEl.classList.toggle("tv-show--active");
    })

    return showEl;
}



const form = document.getElementById("add-show-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const errorEls = document.querySelectorAll(".add-show-form__error-message--show");
    errorEls.forEeach((errorEl) => {
        errorEl.classList.remove("add-show-form__error-message--show");
    });
    
    const title = event.target.title.value;
    const rating = event.target.rating.value;
    const imageSrc = event.target.imageSrc.value;
    
    let hasErrors = false;

    /* validation */
    if (title === "") {
        hasErrors = true;
        const titleErrorEl = document.querySelector(".add-show-form__error-message--title");
        titleErrorEl.classList.add("add-show-form__error-message--show");
    }

    if (rating === "" || isNaN(rating)) {
        hasErrors = true;
        const ratingErrorEl = document.querySelector(".add-show-form__error-message--rating");
        ratingErrorEl.classList.add("add-show-form__error-message--show");
    }

    if (imageSrc === "") {
        hasErrors = true;
        const imageSrcErrorEl = document.querySelector(".add-show-form__error-message--image-src");
        imageSrcErrorEl.classList.add("add-show-form__error-message--show");
    }

    if (hasErrors === true) {
        // we want to end the event handler
        return ;
    }

    // TODO: What to do with adding a form submission?


    event.target.reset();
});