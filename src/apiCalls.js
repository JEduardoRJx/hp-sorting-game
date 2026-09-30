const baseUrl = 'https://hp-api.onrender.com/api';

export const fetchCharacters = async () => {
  const response = await fetch(`${baseUrl}/characters`);
  if(!response.ok) {
    throw Error('There\'s an error with your wand, can\'t fetch characters');
  }
  const characters = await response.json();
  return characters;
}

export const fetchSortingHat = async () => {
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
  return houses[Math.floor(Math.random() * houses.length)];
}
