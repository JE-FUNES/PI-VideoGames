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
  } else if (input.name.length > 15) {
    errors.name = "Name should be up to 15 characters long";
  } else if (!/^[A-Za-z0-9\s]*$/.test(input.name)) {
    errors.name = "Name can only contain letters, numbers, and spaces";
  }
  if (!input.description) {
    errors.description = "Description is required";
  } else if (input.description.length > 1000) {
    errors.description = "Description is too long (maximum 1000 characters).";
  }
  if (!input.image) {
    errors.image = "Image is required";
  } else {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!urlPattern.test(input.image)) {
      errors.image = "Invalid URL format.";
    }
  }
  if (input.genres.length === 0) {
    errors.genres = "Select at least one";
  }
  if (input.platforms.length === 0) {
    errors.platforms = "Select at least one";
  }
  return errors;
};


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
