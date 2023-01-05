const express = require('express')
import dbManager from './dbManager.js'

const API = express()
const dbManagerObject = dbManager()

API.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Max-Age', "1800")
    res.setHeader('Access-Control-Allow-Headers', 'X-XSRF-Token-Origin, X-Requested-With, Content, Accept, Accept-Version')
    res.setHeader('Access-Control-Alllow-Methods', 'GET, POST')
    next()
})


API.get('/images', (req, res, next)=>{
    res.json({images : dbManagerObject.getAllImages()})
    res.status(200).json("Erreur de connexion")
})

API.listen(5000, ()=>{
    console.log("API démarrée")
})

module.exports = API