const btnGetJoke = document.querySelector("#getJoke");
const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
const joke = document.querySelector("#joke")

async function getJoke() {
    const response = await fetch(apiUrl)
    const data = await (await response.json()).joke
    joke.textContent = data
}

btnGetJoke.addEventListener("click", () => {
    getJoke()
})