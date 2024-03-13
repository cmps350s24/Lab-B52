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

    factsArea.innerHTML = `
        <h2>${country.name.official}</h2>
        <img src="${country.flags.png}" alt="The country of ${country.name.official}">

        <table>
        <tr>
            <th>Official Country Name</th>
            <td>${country.name.official}</td>
        </tr>
        </table>
    `
}