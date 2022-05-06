"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "characters",
[
  {
    name: "Eddard Stark",
    age: 34,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Cersei Lannister",
    age: 31,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Catelyn Tully",
    age: 33,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Robbert Baratheon",
    age: 35,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Daenerys Targaryen",
    age: 13,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Olenna Tyrell",
    age: 70,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Robb Stark",
    age: 14,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Sansa Stark",
    age: 11,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Arya Stark",
    age: 9,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Bran Stark",
    age: 7,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Rickon Stark",
    age: 2,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Joffrey Baratheon",
    age: 11,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Myrcella Baratheon",
    age: 7,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Tommen Baratheon",
    age: 6,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Jaime Lannister",
    age: 31,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Tywin Lannister",
    age: 55,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Tyrion Lannister",
    age: 24,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Margaery Tyrell",
    age: 14,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Loras Tyrell",
    age: 15,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Edmure Tully",
    age: 28,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Lysa Tully",
    age: 30,
    alive: true,
    createdAt: new Date(),
    updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("characters", null, {});
  },
};