require("dotenv").config();
const { Genre } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const URL_GENRES = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const getGenres = async () => {
	const response = await axios(URL_GENRES);
	const dataGenres = response.data.results.map((genres) => genres.name);

    let allGenres = [];

	for (const dataGenre of dataGenres) {
        // const existGenres  = await Genre.findOne({where})
        // console.log(dataGenre);

        allGenres.push(await Genre.create({ name: dataGenre }));
	}

	return allGenres;
	// response.map()
};

module.exports = getGenres;
