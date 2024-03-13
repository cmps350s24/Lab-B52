const regionURL = 'https://restcountries.com/v3.1/region/'
const countryURL = 'https://restcountries.com/v3.1/name/'

// Get the reference of the element we want to interact with
const regionDD = document.querySelector('#region')

// add event listener to the selected element

regionDD.addEventListener('change', handleRegionChange)

function handleRegionChange() {
    const url = regionURL + regionDD.value
    const data = fetch(url)
    console.log(data);
}