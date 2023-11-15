require("dotenv").config();
const axios = require("axios");
const {Videogame} = require("../db")

const { API_KEY } = process.env;
const URL_GAMES = `https://api.rawg.io/api/games`;

const gamesById = async(id) => {
  console.log(id);
  const response = (await axios(`${URL_GAMES}/${id}?key=${API_KEY}`)).data
  // console.log(response.data);
  return{
        // id: elem.id,
				name: response.name,
        description: response.description.replace(/<[^>]+>/g, ''),
				platforms: response.platforms.map((platform) => platform.platform.name),
				background_image: response.background_image,
				released: response.released,
				rating: response.rating,
				createdVideogame: false,
				genres: response.genres.map((e) => e.name),
			
  }
}


const getGamesById = async (id,source) => {
  
  if (source==="DDB") {
      return await Videogame.findByPk(id)
    }
  return await gamesById(id)
}

module.exports = getGamesById