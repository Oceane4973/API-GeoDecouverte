
const fs = require('fs')

let dbManager = function(){
  let dbManager = {}

  dbManager.dbJson = function(){
    return JSON.parse(fs.readFileSync('./db.json', 'utf8'))['Images']
  }

  dbManager.dbJsonSize = function(){
    return this.getAllImages.length - 1
  }

  dbManager.getAllImages = function(){
    return this.dbJson
  }

  dbManager.getImageWithNameCity = function(city){
    return this.dbJson.filter(image => image.city == city)
  }

  dbManager.getImageWithNameCountry = function(country){
    return this.dbJson.filter(image => image.country == country)
  }

  dbManager.addImage = function(image){
    if(!(image.city == undefined || image.country == undefined || image.url == undefined)){
      fs.writeFile( 
        "./db.json", 
        JSON.stringify(this.getAllImages.push(image)), 
        (err) => { if (err) {return}}
      ) 
      return true
    }
    return false
  }
  return dbManager
}
