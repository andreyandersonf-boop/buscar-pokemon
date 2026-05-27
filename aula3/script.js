const botaoBuscar = document.querySelector("#btn-buscar")
const inputPokemon = document.querySelector("#pokemonInput")
const resultado = document.querySelector("#resultado")

function getPokemonInput() {
    getPokemon(inputPokemon.value)
}

async function getPokemon(pokemon) {
   try {
    resultado.innerHTML = "carregando..."
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    const data = await resposta.json()

    console.log(data.name) /* pega o nome */
    console.log(data.weight) /* pega o peso */
    console.log(data.height)/* pega altura */
    console.log(data.types[0].type.name)/* pega o tipo */
    console.log(data.sprites.front_default)/* pega a foto */

        renderizaPokemon(data)
   } catch (error) {

   }
}

function renderizaPokemon(data) {
    const {name, weight, height, types, sprites: {front_default}} = data
    const tipo = types[0].type.name

    resultado.innerHTML= `<img src= "${front_default}" alt= "imagem do ${name}">
    <h2>${name}</h2>
    <P>Peso: ${weight}</P>
    <P>Altura: ${height}</P>
    <P>Tipo: ${tipo}</P>
    `
}

botaoBuscar.addEventListener("click", getPokemonInput)