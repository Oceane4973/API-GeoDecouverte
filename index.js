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

API.get('/images/city_filter/:city', (req, res, next)=>{
    res.json( dbManagerObject.getImageWithNameCity(req.params.city))
    res.status(200).json("Erreur de connexion")
})

API.get('/images/country_filter/:country', (req, res, next)=>{
    res.json( dbManagerObject.getImageWithNameCountry(req.params.country))
    res.status(200).json("Erreur de connexion")
})


API.listen(5000, ()=>{
    console.log("API démarrée")
})

module.exports = API