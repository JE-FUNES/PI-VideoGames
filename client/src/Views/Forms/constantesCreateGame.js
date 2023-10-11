export const allGenres = [
  "Action",
  "Indie",
  "Adventure",
  "RPG",
  "Strategy",
  
  "Shooter",
  "Casual",
  "Simulation",
  "Puzzle",
  "Arcade",
  "Platformer",
  "Racing",
  "Educational",
  "Card",
  
  "Sports",
  "Fighting",
  "Massively Multiplayer",
  "Board Games",
];

export const AllPlatforms = [
  "PC",
  "PlayStation",
  "Xbox",
  "Nintendo",
  "iOS",
  "Android",
];

export const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (!input.description) {
    errors.description = "Description is required";
  }
  if (!input.image) {
    errors.image = "Image is required";
  }
  if (input.genres.length === 0) {
    errors.genres = "Select at least one";
  }
  if (input.platforms.length === 0) {
    errors.platforms = "Select at least one";
  }
  return errors;
};

// validation.js
export const validateInput = (input, genres, platforms) => {
  const errors = {};

  if (!input.name) {
    errors.name = "Name is required";
  }

  if (genres.length === 0) {
    errors.genres = "Select at least one genre";
  }

  if (!input.description) {
    errors.description = "Description is required";
  }

  if (platforms.length === 0) {
    errors.platforms = "Select at least one platform";
  }

  if (!input.image) {
    errors.image = "Image is required";
  }

  return errors;
};



