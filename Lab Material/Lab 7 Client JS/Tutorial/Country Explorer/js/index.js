const regionURL = 'https://restcountries.com/v3.1/region/'
const countryURL = 'https://restcountries.com/v3.1/name/'

// Get the reference of the element we want to interact with
const regionDD = document.querySelector('#region')
const countryDD = document.querySelector('#country')

// add event listener to the selected element

regionDD.addEventListener('change', handleRegionChange)

async function handleRegionChange() {
    const url = `${regionURL}${regionDD.value}`  //construct the proper URL Route to get the data [endpoint]
    const data = await fetch(url) //download the data
    const countries = await data.json()  //parse the data
    const countriesOptions = countries
        .map(country => `<option value = ${country.name.common}> ${country.name.common}</option>`)
        .join(' ')

    countryDD.innerHTML = countriesOptions
}