'use strict'

function getCountryByName(name) {
    let savedResults = loadFromStorage(name)
    if(savedResults) return Promise.resolve(savedResults)
    return axios.get(`https://restcountries.com/v3.1/name/${name}`).then(res =>{
        saveToStorage(name, res)
        return res
    })
}

