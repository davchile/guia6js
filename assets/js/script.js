//**Método antiguo */
// async function getRandomUser() {
//     const res = await fetch ("https://randomuser.me/api")
//     const data = await res.json()
//     console.log(data)
// }
// getRandomUser()

//Método actual, trae todo el resultado
// const getRandomUser = async()=> {
//     const res = await fetch ("https://randomuser.me/api") //Fetch, es un API del navegador que permite llamar una API rest
//     const data = await res.json()
//     console.log(data)  
// }
// getRandomUser()
//Trae solo un elemento del arreglo
// const getRandomUser = async()=> {
//     const res = await fetch ("https://randomuser.me/api") //Fetch, es un API del navegador que permite llamar una API rest
//     const data = await res.json()
//     console.log(data.results[0])  
// }
// getRandomUser()
//Trae 5 elementos
// const getRandomUser = async()=> {
//     const res = await fetch ("https://randomuser.me/api/?results=5") //Obtengo una respuesta y la dejo en espera
//     const data = await res.json()
//     console.log(data.results)  
// }
// getRandomUser()

// const getMonedas = async()=> {
//     const res = await fetch("https://api.gael.cloud/general/public/monedas/USD")
//     const data = await res.json()
//     console.log(data)
// }
// getMonedas()

//Esto es lo que ejecuta "async" y "await"
// fetch("https://api.gael.cloud/general/public/monedas/USD")
//     .then((res)=> {
//         return res.json()
//     })
//     .then((json)=> {
//         console.log(json)
//     })
//     .catch((error)=> {
//         console.log(error)
//     })

// const renderUser = (data)=> {
//     const name = document.querySelector("#name")
//     const email = document.querySelector("#email")
//     const phone = document.querySelector("#phone")
//     const photo = document.querySelector("#photo")
//     const city = document.querySelector("#city")
//     name.innerHTML = `${data.name.first} ${data.name.last}`
//     email.innerHTML = data.email
//     phone.innerHTML = data.cell
//     city.innerHTML = data.location.city
//     photo.src = data.picture.large
// }

// Buena práctica para ocupar las API
//  const renderUser = async()=> {
//     const data = await getRandomUser()
//     const userContainer = document.querySelector("#user")
//     const html = `
//     <img id="photo" src="${data.picture.large}" alt="Foto">
//     <h3>Nombre: ${data.name.first} ${data.name.last}</h3>
//     <h3>Email: ${data.email}</h3>
//     <h3>Teléfono: ${data.cell}</h3>
//     <h3>Ciudad: ${data.location.city}</h3>
//     `
//     userContainer.innerHTML = html
//  }

// const getRandomUser = async () => {
//     try {
//         const res = await fetch("https://randomuser.me/api")
//         const data = await res.json()
//         console.log(data.results)
//         // renderUser(data.results[0])
//         return data.results[0]

//     } catch (error) {
//         console.log(error)
//         const userContainer = document.querySelector("#user")
//         userContainer.innerHTML = "Ha ocurrido un error."
//     }
// }
// // getRandomUser()
// renderUser()

//**Ejemplo PokeAPI */
const form = document.querySelector("#form")
const input = document.querySelector("#input-search")
const pokemonContainer = document.querySelector("#pokemon")

const getPokemon = async(name)=> {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const json = await res.json()
        return json
    } catch(error) {
        console.log(error)
        return "Not Found"
    }
}

const renderPokemon = (data)=> {
    html = `
    <img src="${data.sprites.front_default}">
    <h3>N° ${data.id} - <span class = "name">${data.name}</span></h3>
    `
    pokemonContainer.innerHTML = html
}

//Agregamos evento al formulario
form.addEventListener("submit", async(e)=> {
    e.preventDefault()
    const name = input.value.toLowerCase().trim()
    const data = await getPokemon(name)
    if(data === "Not found") {
        pokemonContainer.innerHTML = "<h3>Pokemon no encontrado</h3>"
        return
    }
    renderPokemon(data)
})