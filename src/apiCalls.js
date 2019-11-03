const baseUrl = 'https://www.potterapi.com/v1';
const sortingHat = '/sortingHat';

const apiKey = `?key=$2a$10$soGCoAQkdenPDKuyeTco3urLugvc4a/RMC2S3tzviQxAbVxmHAPN6`

const apiKey2 = `?key=$2a$10$AZk7aQ1VZuDe/U1v8A.9u.k/U7knzlj8B7gonTU6Qw/mtqV4rO6zq`

export const fetchCharacters = async () => {
  const url = `${baseUrl}/characters${apiKey2}`;
  const response = await fetch(url);
  if(!response.ok) {
    throw Error('There\'s an error with your wand, can\'t fetch characters');
  }
  const characters = await response.json();
  return characters;
}