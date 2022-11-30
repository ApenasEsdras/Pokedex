
// Requisição HTTP 
     //  Path                                       Query String

const offset = 0
const limit = 10
const URL =  `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(URL)
// esses aq são retornos da URL
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))//consversão p json
    .catch((error) => console.error(error))