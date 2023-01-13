const fetch = require('node-fetch-commonjs')
const fs = require('fs')

const developmentMode = false


var url = "http://localhost:5000"
if(!developmentMode){
    url = "https://api-atelier-technique.vercel.app"
}

var RADIUS = 200

let deployementTest = new class DeployementTest {
    constructor() {}

    addImage(nameFile){
        fetch(`${url}/images/add`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    city : "Washigton DC",
                    country: "USA",
                    image : fs.readFileSync(`./${nameFile}.png`)
                }
            )
        })
        .then(res => res.text())
        .then(res =>  console.log(res))
    }

    getAll(radius){
        fetch(`${url}/images/${radius}`)
        .then(res => res.text())
        .then(res =>  console.log(res))
    }

    searchByCity(city, radius){
        fetch(`${url}/images/city_filter/${city}/${radius}`)
        .then(res => res.text())
        .then(res =>  console.log(res))
    }

    searchByCountry(country, radius){
        fetch(`${url}/images/country_filter/${country}/${radius}`)
        .then(res => res.text())
        .then(res =>  console.log(res))
    }
}

deployementTest.addImage("imageTest")
deployementTest.searchByCity("Washigton DC", RADIUS)
deployementTest.searchByCountry("USA", RADIUS)
deployementTest.searchByCountry("Africa", RADIUS)
