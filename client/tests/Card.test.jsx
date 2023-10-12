import React from "react";
import { render } from "@testing-library/react";
import Card from "../src/components/Card/Card.jsx"; 

describe("Card Component", () => {
  const gameData = {
    
    name: "Game 1",
    image: "game1.jpg",
    rating: 4.5,
    genres: [{ id: 1, name: "Genre 1" }],
  };

  it("should render the Card component without errors", () => {
    const { container } = render(<Card game={gameData} />);
    const cardComponent = container.querySelector("#card"); // Asegúrate de usar el selector correcto

    expect(cardComponent).toBeTruthy();
  });

  it("should render the game's name and image", () => {
    const { container } = render(<Card game={gameData} />);
    const gameNameElement = container.querySelector(".name"); // Asegúrate de usar el selector correcto
    const gameImageElement = container.querySelector(".imgCard"); // Asegúrate de usar el selector correcto

    expect(gameNameElement).toBeTruthy();
    expect(gameImageElement).toBeTruthy();
    expect(gameNameElement.textContent).toEqual("Game 1");
  });

  it("should render genres and rating", () => {
    const { container } = render(<Card game={gameData} />);
    const genresElement = container.querySelector(".genre"); // Asegúrate de usar el selector correcto
    const ratingElement = container.querySelector(".rating"); // Asegúrate de usar el selector correcto

    expect(genresElement).toBeTruthy();
    expect(ratingElement).toBeTruthy();
    expect(genresElement.textContent).toContain("Genres: Genre 1");
    expect(ratingElement.textContent).toContain("4.5");
  });
});
