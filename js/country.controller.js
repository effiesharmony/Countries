'use strict'

function onInit() {
  onGetCountryInfo()
}

function renderInfo(data) {
  document.querySelector('.country-name').innerHTML = data.name.common
  document.querySelector('.country-flag').src = data.flags.png
  document.querySelector('.country-flag').alt = data.flags.alt
  document.querySelector('.population').innerHTML = `population: ${data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  document.querySelector('.area').innerHTML = `area: ${data.area} km²`
  console.log(data)
}

function onGetCountryInfo() {
  let countryName = document.querySelector('.search-box').value
  if (!countryName) countryName = 'israel'
  getCountryByName(countryName)
    .then(res => renderInfo(res.data[0]))
    .catch(err => console.error(err))
}

document.querySelector('.search-box').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') onGetCountryInfo()
})