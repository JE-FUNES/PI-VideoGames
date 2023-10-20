const chai = require("chai");
const { conn, Videogame } = require("../src/db");
const { expect } = chai;

describe("Videogame GET by ID", () => {
  before(() => conn.authenticate().catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  it("should retrieve an existing Videogame by ID", async () => {
    try {
      const existingVideogameId = "445c8f2e-14ca-4225-997b-ebc78512aac6"; 

      const existingVideogame = await Videogame.findByPk(existingVideogameId);

      expect(existingVideogame).to.not.be.null; // Verifica que el videojuego exista en la base de datos.
      expect(existingVideogame.name).to.equal("Juego de Prueba 1");
    } catch (error) {
      throw error;
    }
  });

  
});
