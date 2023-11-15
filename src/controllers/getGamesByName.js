require("dotenv").config();
const {Videogame} = require("../db")
const axios = require("axios");

const { API_KEY } = process.env;
const URL_GAMES = `https://api.rawg.io/api/games`;

// `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page=${i}`
const getGamesByName = async (name) => {

	let character = [];
	let i = 1;
	while (i < 6) {
        const response = await axios(`${URL_GAMES}?search=${name}&key=${API_KEY}&page=${i}`);
        character.push(response)
        i++
    }

	character = (await Promise.all(character)).map((char) =>
		char.data.results.map((elem) => {
			return {
				id: elem.id,
				name: elem.name,
				platforms: elem.platforms.map((platform) => platform.platform.name),
				background_image: elem.background_image,
				released: elem.released,
				rating: elem.rating,
				createdVideogame: false,
				genres: elem.genres.map((e) => e.name),
			};
		})
	);
    console.log(character.flat());
	return character.flat();
};

const getAllGamesByName = async (name) => {
  const getNameDBB = await Videogame.findAll({where: {name}})
  const getNameApi = await getGamesByName(name)

  return [...getNameApi, getNameDBB]
}


module.exports = getAllGamesByName;
