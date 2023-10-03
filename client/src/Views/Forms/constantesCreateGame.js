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
   "Massively Multiplayer",
   "Sports",
   "Fighting",
   "Family",
   "Board Games",
   "Educational",
   "Card"
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
        errors.name = 'Name is required';
    }
    if (!input.description) {
        errors.description = 'Description is required';
    }
    if (!input.image) {
        errors.image = 'Image is required';
    }
    if (input.genres.length === 0) {
        errors.genres = 'Select at least one';
      }          
    if (input.platforms.length === 0) {
        errors.platforms = 'Select at least one';
      }
    return errors;
};



