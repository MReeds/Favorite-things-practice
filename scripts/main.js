const container = document.querySelector("#favoriteThings")

document.querySelector("#saveEntry").addEventListener("click", event => {
    const thingInput = document.querySelector("#favThing").value
    const locationInput = document.querySelector("#location").value

    container.innerHTML += `
        <p>I can purchase ${thingInput} at ${locationInput}</p>
    `
})