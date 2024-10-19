// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(response => response.json())
// .then(data => {
//     for (let index = 0; index < data.results.length; index++) {
//         let corpo = document.querySelector(".tableBody")
//         let linha = document.createElement("tr")
//         linha.innerHTML = `
//             <td>${data.results[index].id}</td>
//             <td>${data.results[index].name}</td>
//             <td>${data.results[index].status}</td>
//             <td>${data.results[index].species}</td>
//             <td>${data.results[index].type}</td>
//             <td><img src="${data.results[index].image}" alt=""></td>
//             <td>${data.results[index].origin.name}</td>
//         `
//         corpo.appendChild(linha)
//     }
// })




// const buscarDados = async () => {
//     const response = await fetch("https://gsi.fly.dev/characters")
//     const data = await response.json()

//     let corpo = document.querySelector(".tableBody")

//     for (let index = 0; index < data.results.length; index++) {
//         let linha = document.createElement("tr")
//         linha.innerHTML=`
//                 <td>${data.results[index].id}</td>
//                 <td>${data.results[index].name}</td>
//                 <td>${data.results[index].rarity}</td>
//                 <td>${data.results[index].weapon}</td>
//                 <td>${data.results[index].vision}</td>
//         `
//         corpo.appendChild(linha)
//     }
// }

// buscarDados();

fetch ("https://narutodb.xyz/api/character")
.then(response => response.json())
.then(data => {
    for (let index = 0; index < data.characters.length; index++) {
        let corpo = document.querySelector(".tableBody")
        let linha = document.createElement("tr")
        linha.innerHTML = `
            <td>${data.characters[index].id}</td>
            <td>${data.characters[index].name}</td>
            <td>${data.characters[index].jutsu}</td>
            <td><img src="${data.characters[index].images[0]}" alt="${data.characters[index].name}"></td>
        `
        corpo.appendChild(linha)
    }
})
