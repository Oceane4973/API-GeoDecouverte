const express = require('express')
const dbManagerObject = require('./dbManager.js').dbManager
const { v4: uuidv4 } = require('uuid')
const fetch = require('node-fetch-commonjs')
const fs = require('fs')

const API = express()

API.use(express.json())

API.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Max-Age', "1800")
    res.setHeader('Access-Control-Allow-Headers', 'X-XSRF-Token-Origin, X-Requested-With, Content, Accept, Accept-Version')
    res.setHeader('Access-Control-Alllow-Methods', 'GET, POST')
    next()
})

API.use('/image', express.static('images'))

API.use(express.urlencoded({ extended: true }))

API.get('/images', (req, res, next)=>{
    res.json({images : dbManagerObject.getAllImages()})
    res.status(200).json("Erreur de connexion")
})

API.post('/images/add', (req, res, next)=>{
    const newDataImage = {
        city : req.body.city,
        country: req.body.country,
        url : `./images/${uuidv4()}.png`,
        date : new Date(),
    }

    let buffer = Buffer.from(req.body.image.data, 'base64')
    fs.writeFile(newDataImage.url, buffer, function (err) {
        if (err) throw err
    })

    dbManagerObject.addImage(newDataImage)
    res.end()
})

API.get('/images/city_filter', (req, res, next)=>{
    res.json( dbManagerObject.getImageWithNameCity(req.body.city))
    res.status(200).json("Erreur de connexion")
})

API.get('/images/country_filter', (req, res, next)=>{
    res.json( dbManagerObject.getImageWithNameCountry(req.body.country))
    res.status(200).json("Erreur de connexion")
})


API.listen(5000, ()=>{
    console.log("API démarrée")
})

/*
function PostImageTest(){

    const nameFile = "graphe"

    fetch(`http://localhost:5000/images/add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                city : "Washigton DC",
                country: "USA",
                image : fs.readFileSync(`./images/${nameFile}.png`)
            }
        )
    })
    .then(res => res.text())
    .then(res =>  console.log(res))
}*/

module.exports = API