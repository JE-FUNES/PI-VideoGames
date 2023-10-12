const chai = require("chai");
const { conn, Contact } = require("../src/db"); // Asegúrate de importar correctamente tu configuración de Sequelize


const { expect } = chai; // chai es una libreria

describe("Contact Model", () => {
    // ve si se puede conectar a la base de datos
    before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  before(async () => {
    // Realiza la sincronización con la base de datos antes de ejecutar las pruebas
    await Contact.sync({ alter: true }); // el alter deja los datos guardados
  });

  it("should create a new Contact with valid attributes", async () => {
    try {
      const newContact = await Contact.create({
        name: "Julia Funes",
        email: "funes@example.com",
        likedPage: 4,
        reason: "esto es una prueba del test.",
      });


      expect(newContact.name).to.equal("Julia Funes");
      expect(newContact.email).to.equal("funes@example.com");
      expect(newContact.likedPage).to.equal(4);
      expect(newContact.reason).to.equal("esto es una prueba del test.");
    } catch (error) {
      throw error;
    }
  });

  it("should not create a Contact with invalid attributes", async () => {
    try {
      // Intenta crear un Contact sin atributos requeridos
      await Contact.create({});

      // Si el modelo de Sequelize lanza una excepción, entonces los atributos requeridos funcionan correctamente
      throw new Error("Contact was created with invalid attributes.");
    } catch (error) {
      expect(error.name).to.equal("SequelizeValidationError");
    }
  });
});

