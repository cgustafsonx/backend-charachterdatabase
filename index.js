const express = require("express");
const cors = require("cors");
const app = express();

const Character = require("./models").Character
const House = require("./models").House

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Game of Thrones")
})

app.get("/characters", async (req, res, next) => {
  const characters = await Character.findAndCountAll()
  res.send(characters)
})

app.get("/characters/:id", async (req, res, next) => {
  const { id } = request.params
  const character = await Character.findByPk(id, {include: House})
  res.send(character)
})

app.get("/houses", async (req, res, next) => {
  const houses = await House.findAndCountAll()
  res.send(houses)
})

app.get("/houses/:id", async (req, res, next) => {
  const { id } = request.params
  const house = await House.findByPk(id, {include: Character})
  res.send(house)
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))