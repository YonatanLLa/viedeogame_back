require("dotenv").config();
const axios = require("axios");

const { API_KEY } = process.env;
const URL_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}`;
const {Videogame} = require("../db")
// busqueda total de API:

const videoGames = async () => {
  const requests = [];
  
  for (let i = 1; i < 2; i++) {
    requests.push(axios(`${URL_GAMES}&page=${i}`));
  }
  
  const responses = await Promise.all(requests);
  
  const characters = responses.flatMap((char) =>
    char.data.results.map((elem) => ({
      id: elem.id,
      name: elem.name,
      platforms: elem.platforms.map((platform) => platform.platform.name),
      background_image: elem.background_image,
      released: elem.released,
      rating: elem.rating,
      createdVideogame: false,
      genres: elem.genres.map((e) => e.name),
    }))
  );
  
  return characters;
};

const videoAllGames = async () =>{
	const gamesAllDBB = await Videogame.findAll()
	const gamesAllApi = await videoGames()

	return [...gamesAllDBB, ...gamesAllApi]
}



module.exports = videoAllGames;
