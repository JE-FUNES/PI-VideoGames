const chai = require("chai");
const { conn } = require("../src/db");
const  server  = require("../src/appServer");
const request = require("supertest");

const { expect } = chai;

describe("Genres API", () => {
  before(() => conn.authenticate().catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  describe("GET /genres", () => {
    it("should retrieve a list of genres", (done) => {
      request(server)
        .get("/genres")
        .expect(200) // Espera una respuesta con estado 200 (éxito)
        .end((err, res) => {
          if (err) return done(err);

          // Verifica que la respuesta sea un arreglo de objetos
          expect(res.body).to.be.an("array");

          // Verifica que los objetos tengan las propiedades id y name
          res.body.forEach((genre) => {
            expect(genre).to.have.property("id");
            expect(genre).to.have.property("name");
          });

          done(); // Indica que el test ha terminado
        });
    });
  });

  // Puedes agregar más casos de prueba según tus necesidades.
});
