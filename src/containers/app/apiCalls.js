const baseUrl = 'https://www.potterapi.com/v1';
const sortingHat = '/sortingHat';
const houses = '/houses'
const spells = '/spells'

const apiKey = `?key=$2a$10$soGCoAQkdenPDKuyeTco3urLugvc4a/RMC2S3tzviQxAbVxmHAPN6`

export const fetchCharacters = async () => {
  const url = `${baseUrl}/characters${apiKey}`;
  const response = await fetch(url);
  if(!response.ok) {
    throw Error('There\'s an error with your wand, can\'t fetch characters');
  }
  const characters = await response.json();
  return characters;
}