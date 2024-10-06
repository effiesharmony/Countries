'use strict'

function onInit() {
  onGetCountryInfo()
}

function renderInfo(data) {
    document.querySelector('.pre').innerHTML = JSON.stringify(data, null, 2)
    console.log(data)
}

function onGetCountryInfo() {
    let countryName = document.querySelector('.search-box').value
    if(!countryName) countryName = 'israel'
    getCountryByName(countryName)
    .then(res => renderInfo(res.data[0]))
    .catch(err => console.error(err))
}