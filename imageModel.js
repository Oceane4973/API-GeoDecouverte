const { v4: uuidv4 } = require('uuid')
const fetch = require('node-fetch-commonjs')
const params = {
    access_key: 'AIzaSyCwtN-3et4XEgSNZHGnz8jFP1jlDUQnpHg'
}

class ImageModel{
    constructor(_lat, _lng){
        this.filename = uuidv4()
        this.url = `./images/${this.filename}.png`
        this.date = new Date()
        this.geometry = { 
            lat : _lat, 
            lng : _lng 
        }
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.geometry.lat},${this.geometry.lng}&key=${params.access_key}`)
        .then((responseText) => { return responseText.json() })
        .then(jsonData => { 
            const formatted_address = jsonData.plus_code.compound_code
            this.city = formatted_address.substring(formatted_address.split(' ')[0].length).split(',')[0].substring(1)
            this.country = formatted_address.split(' ')[formatted_address.split(' ').length-1]
        })
        .catch(error => { console.log(error) })
    }
}


module.exports['ImageModel'] = ImageModel