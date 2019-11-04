import { fetchCharacters, fetchSortingHat } from './apiCalls';

describe('fetchCharacters', () => {
  const url = `https://www.potterapi.com/v1/characters?key=$2a$10$AZk7aQ1VZuDe/U1v8A.9u.k/U7knzlj8B7gonTU6Qw/mtqV4rO6zq`;
  const mockResponse = [{
    bloodStatus: "pure-blood",
    deathEater: false,
    dumbledoresArmy: false,
    house: "Hufflepuff",
    ministryOfMagic: false,
    name: "Cedric Diggory",
    orderOfThePhoenix: false,
    role: "Student",
    school: "Hogwarts School of Witchcraft, and Wizardry",
    species: "human",
    wand: 'Ash, 12 1/4", unicorn hair',
    __v: 0,
    _id: "5a1096253dc2080021cd875f"
  }];
  const mockCharacters = [{
    bloodStatus: "pure-blood",
    deathEater: false,
    dumbledoresArmy: false,
    house: "Hufflepuff",
    ministryOfMagic: false,
    name: "Cedric Diggory",
    orderOfThePhoenix: false,
    role: "Student",
    school: "Hogwarts School of Witchcraft, and Wizardry",
    species: "human",
    wand: 'Ash, 12 1/4", unicorn hair',
    __v: 0,
    _id: "5a1096253dc2080021cd875f"
  }];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          results: mockResponse
         })
      });
    });
  });

  it('should call fetchMovies with the correct url', () => {
    fetchCharacters();
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should return an array of characters', () => {
    expect(fetchCharacters()).resolves.toEqual(mockCharacters)
  });

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(fetchCharacters()).rejects.toEqual(Error('There\'s an error with your wand, can\'t fetch characters'))
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Muggle Error'))
    });
    expect(fetchCharacters()).rejects.toEqual(Error('Muggle Error'));
  });
});

describe('fetchSortingHat', () => {
  const url = 'https://www.potterapi.com/v1/sortingHat';
  const mockResponse = 'Slytherin';
  const mockHouse = 'Slytherin';

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          results: mockResponse
         })
      });
    });
  });

  it('should call fetchSortingHat with the correct url', () => {
    fetchSortingHat();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return a sorting house', () => {
    expect(fetchSortingHat()).resolves.toEqual(mockHouse);
  });

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(fetchSortingHat()).rejects.toEqual(Error('The sorting hat must me asleep, can\'t fetch House'))
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Muggle Error'))
    });
    expect(fetchCharacters()).rejects.toEqual(Error('Muggle Error'));
  });
})