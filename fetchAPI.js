// fetch = Function used for making HTTP request to fetch resources.
//         (JSON style data, image, files)
//         Simplifies asynchronous data fenching in Javascript and 
//         used for interacing with API's to retrieve and send 
//         data asynchronous over the web.
//         fetch(url, {options})


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(Response => {
//         if (!Response.ok) {
//             throw new Error("Could not fetch resourse")
//         }
//         return Response.json();
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.log(error))

async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch resourse")
        }
        const data = await response.json();
        const PokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprit");
        
        imgElement.src = PokemonSprite;
        imgElement.style.display = "block"
    }
    catch(error){
        console.log(error);
        
    }
}













