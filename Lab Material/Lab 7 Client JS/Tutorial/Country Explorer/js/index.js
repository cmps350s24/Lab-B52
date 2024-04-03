const regionURL = 'https://restcountries.com/v3.1/region/'
const countryURL = 'https://restcountries.com/v3.1/name/'

// Get the reference of the element we want to interact with
const regionDD = document.querySelector('#region')
const countryDD = document.querySelector('#country')
const factsArea = document.querySelector('#facts-area')

// add event listener to the selected element

regionDD.addEventListener('change', handleRegionChange)
countryDD.addEventListener('change', handleCountryChange)

async function handleRegionChange() {
    const url = `${regionURL}${regionDD.value}`  //construct the proper URL Route to get the data [endpoint]
    const data = await fetch(url) //download the data
    const countries = await data.json()  //parse the data
    const countriesOptions = countries
        .map(country => `<option value ='${country.name.common}'> ${country.name.common}</option>`)
        .join(' ')

    countryDD.innerHTML = countriesOptions
}
async function handleCountryChange() {
    const url = `${countryURL}${countryDD.value}`  //construct the proper URL Route to get the data [endpoint]
    const data = await fetch(url) //download the data
    const countries = await data.json()  //parse the data
    const country = countries[0]

    const currKeys = Object.keys(country.currencies)
    const langKeys = Object.keys(country.languages)

    const currencies = currKeys.map(key => country.currencies[key].name).join(' - ')
    const languages = langKeys.map(key => country.languages[key]).join(' - ')

    factsArea.innerHTML = `
        <h2>${country.name.official}</h2>
        <img src="${country.flags.png}" alt="${country.flags.alt}">

        <table>
            <tr>
                <th>Official Country Name</th>
                <td>${country.name.official}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td>${country.population}</td>
            </tr>
            <tr>
                <th>Currencies</th>
                <td>${currencies}</td>
            </tr>
            <tr>
                <th>Languages</th>
                <td>${languages}</td>
            </tr>
        </table>
    `
}



// // const countries = [
// //     {
// //         name: "Saudi Arabia",
// //         currencies: {
// //             SR: {
// //                 name: "Qatari riyal",
// //                 symbol: "Ø±.Ù‚"
// //             }
// //         },
// //     },
// //     {
// //         name: "Qatar",
// //         currencies: {
// //             QAR: {
// //                 name: "Qatari riyal",
// //                 symbol: "Ø±.Ù‚"
// //             }
// //         },
// //     }
// // ]
// // const currKeys = Object.keys(countries[0].currencies)
// // console.log(countries[0].currencies[currKeys[0]]);



localStorage.name = "Khloud"

// localStorage.name = "Ali"
// localStorage.age = "12"
// console.log(Object.keys(localStorage));

// // delete localStorage.name


// console.log(Object.keys(localStorage));


















