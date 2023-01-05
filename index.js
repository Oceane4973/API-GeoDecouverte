const express = require('express')
const dbManagerObject = require('./dbManager.js').dbManager

const API = express()

API.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Max-Age', "1800")
    res.setHeader('Access-Control-Allow-Headers', 'X-XSRF-Token-Origin, X-Requested-With, Content, Accept, Accept-Version')
    res.setHeader('Access-Control-Alllow-Methods', 'GET, POST')
    next()
})

API.get('/images', (req, res)=>{
    //res.json({images : dbManagerObject.getAllImages()})
    res.json(dbManagerObject)
    //res.status(200).json("Erreur de connexion")
})

API.post('/images/add', (req, res)=>{
    res.json( dbManagerObject.addImage(req.body.image))
    //res.status(200).json("Erreur de connexion")
})

API.get('/images/city_filter', (req, res)=>{
    res.json( dbManagerObject.getImageWithNameCity(req.body.city))
    //res.status(200).json("Erreur de connexion")
})

API.get('/images/country_filter', (req, res)=>{
    res.json( dbManagerObject.getImageWithNameCountry(req.body.country))
    //res.status(200).json("Erreur de connexion")
})


API.listen(5000, ()=>{
    console.log("API démarrée")

    /*console.log(dbManagerObject.getAllImages())
    console.log(dbManagerObject.addImage(
        {
            "country": "Africa",
            "url": "./images/2094742-200.png"
        }
    ))
    console.log(dbManagerObject.addImage(
        {
            "city": "Washigton DC",
            "country": "USA",
            "url": "./images/2094742-200.png"
        }
    ))
    console.log(dbManagerObject.getBdSize())
    console.log(dbManagerObject.getImageWithNameCity("Marseille"))
    console.log(dbManagerObject.getImageWithNameCity("y"))
    console.log(dbManagerObject.getImageWithNameCountry("France"))
    console.log(dbManagerObject.getImageWithNameCountry("USA"))
    console.log(dbManagerObject.getImageWithNameCountry(""))*/
})

module.exports = API