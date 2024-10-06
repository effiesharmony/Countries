'use strict'

let gValue = 'Israel'

function onGetCountryInfo() {
    gValue = document.querySelector('.search-box').value
    axios.get(`https://restcountries.com/v3.1/name/${gValue}`).then(res => renderInfo(res.data[0]))
}

function renderInfo(data) {
    document.querySelector('.pre').innerHTML = JSON.stringify(data, null, 2)
    console.log(data)
}