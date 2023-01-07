const fetch = require('node-fetch-commonjs')
const fs = require('fs')

const developmentMode = false

var url = "http://localhost:5000"
if(!developmentMode){
    url = "https://api-atelier-technique.vercel.app"
}

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

    getAll(){
        fetch(`${url}/images`)
        .then(res => res.text())
        .then(res =>  console.log(res))
    }

    searchByCity(city){
        fetch(`${url}/images/city_filter/${city}`)
        .then(res => res.text())
        .then(res =>  console.log(res))
    }

    searchByCountry(country){
        fetch(`${url}/images/country_filter/${country}`)
        .then(res => res.text())
        .then(res =>  console.log(res))
    }
}

deployementTest.addImage("imageTest")
deployementTest.searchByCity("Washigton DC")
deployementTest.searchByCountry("USA")
deployementTest.searchByCountry("Africa")
