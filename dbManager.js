
const fs = require('fs')

let dbManager = new class DbManager {
  constructor() {}
  
  getAllImages(){
    return JSON.parse(fs.readFileSync('./bd.json', 'utf8'))["Images"]
  }

  getBdSize(){
    return this.getAllImages().length - 1
  }

  getImageWithNameCity(city){
    return this.getAllImages().filter(image => image.city == city)
  }

  getImageWithNameCountry(country){
    return this.getAllImages().filter(image => image.country == country)
  }

  addImage(image){
    if(!(image.city == undefined || image.country == undefined || image.url == undefined || image.date == undefined)){
      image.id = this.getBdSize()+1
      let tmp = this.getAllImages()
      tmp[image.id] = image

      fs.writeFileSync( 
        "./bd.json",
        JSON.stringify({ "Images": tmp  }), 
        (err) => { if (err) {return}}
      ) 
      return true
    }
    return false
  }
}


module.exports['dbManager'] = dbManager