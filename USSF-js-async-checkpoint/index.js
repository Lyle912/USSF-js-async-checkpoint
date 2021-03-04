const fetch = require('node-fetch');
const fs = require("fs")

var inputPath = 'E:/1. New SSD/SDI/Course_Work/USSF-js-async-checkpoint/input.txt'

//read our input file, added contents to "contentString" variable
var contentString = fs.readFileSync(inputPath, "utf8");
//converted our string to an Array
var contentArray = contentString.split('\r\n')
//loop through the array
contentArray.forEach(pokemonName => {
    var pokemonTypeArray = []
    var url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    //start our fetch stuff
    fetch(url)
        .then(response => response.json())
        .then(json => json.types)
        .then(typeArray => {
            typeArray.forEach(typeObject => {
                pokemonTypeArray.push(typeObject.type['name'])
            })
            console.log(`Pokemon Name: ${pokemonName}. Type: ${pokemonTypeArray.join(', ')}`)
        })
})