const House = require("./models").house
const Character = require("./models").character

const getHouses = async () => {
  const houses = await Houses.findAll({include: [ Character ]})
  return houses.map(house => house.get({plain: true}))
}

getHouses().then(data => console.log(data))

const getCharacters = async () => {
  const chars = await Characters.findAll({include: House})
  return chars.map(char => char.get({plain: true}))
}

getCharacters().then(data => console.log(data))