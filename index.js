const express = require("express")

const House = require("./models").house 
const Character = require("./models").character

const app = express()

const PORT = 4000

app.use(express.json())

app.get("/", async (request, response, next) => {
  try {
    response.send("Welcome to GAME OF THRONES")
  } catch (error) {
    console.log(error)
    next(error)
  }
})

app.get("/houses", async (request, response, next) => {
  try {
    const houses = await House.findAll({ include: {
      model: House
    }})
    response.send(houses)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

app.post("/houses", async (request, response, next) => {
  try {
    const { name, sigil, head, extinct } = request.body
    const newHouse = await House.create({ name, sigil, head, extinct })
    response.send(newHouse)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

app.patch("/houses/:id", async (request, response, next) => {
  try {
   const { sigil, head, extinct } = request.body
   const { id } = request.params

  const house = await House.findByPk(id)

  const updatedHouse = await house.update({ sigil, head, extinct }) 

  response.send(updatedHouse)

  } catch (error) {
    console.log(error)
    next(error)
  }
})

app.delete("/houses/:id", async (request, response, next) => {
  try {
    const { id } = request.params

    const house = await House.findByPk(id)

    if(!house){
      return response.status(404).send("NO HOUSE WITH THAT ID")
    } 
    const deleteHouse = house.destroy()

    response.send({ user: deleteHouse, message: "HOUSE DELETED" })

  } catch (error) {
    console.log(error)
    next(error)
  }
})

app.get("/characters", async (request, response, next) => {
  try {
    const characters = await Character.findAll({ include: {
      model: Character
    }})
    response.send(characters)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

app.post("/characters", async (request, response, next) => {
  try {
    const { name, age, alive } = request.body
    const newChar = await Character.create({ name, age, alive })
    response.send(newChar)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

app.patch("/characters/:id", async (request, response, next) => {
  try {
   const { name, age, alive } = request.body
   const { id } = request.params

  const character = await Character.findByPk(id)

  const updatedChar = await character.update({ name, age, alive }) 

  response.send(updatedChar)

  } catch (error) {
    console.log(error)
    next(error)
  }
})

app.delete("/characters/:id", async (request, response, next) => {
  try {
    const { id } = request.params

    const character = await Character.findByPk(id)

    if(!character){
      return response.status(404).send("NO CHARACTER WITH THAT ID")
    } 
    const deleteChar = character.destroy()

    response.send({ user: deleteChar, message: "CHARACTER DELETED" })

  } catch (error) {
    console.log(error)
    next(error)
  }
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))