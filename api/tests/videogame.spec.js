const chai = require("chai");
const { conn, Videogame } = require("../src/db");
const { expect } = chai;

describe("Videogame GET by ID", () => {
  before(() => conn.authenticate().catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  it("should retrieve an existing Videogame by ID", async () => {
    try {
      const existingVideogameId = "9bc02a4d-ea1b-4efa-9a80-7d6443d5df9f"; 

      const existingVideogame = await Videogame.findByPk(existingVideogameId);

      expect(existingVideogame).to.not.be.null; // Verifica que el videojuego exista en la base de datos.
      expect(existingVideogame.name).to.equal("Test Game"); // Asegúrate de que coincida con los detalles reales del videojuego.
    } catch (error) {
      throw error;
    }
  });

  
});
