const { Videogame, Genre } = require("../db");
// const videoGames = require("../controllers/getGames");

const postGames = async (
	name,
	platforms,
	background_image,
	released,
	rating,
	description,
	genres
) => {
	// const gamesApi = await videoGames();
	// console.log(name, "pasoooooo..");
	// const gamesFilter = gamesApi.filter((game) => {
	// 	console.log(game.name, "xddddd");
	// 	console.log(name, "lo enviandoooooooo");
	// 	return game.name === name;
	// });
	// if (gamesFilter.lenght !== 0) throw new Error("El juego ya existe...");

	const createVideoGames = await Videogame.create({
		name,
		platforms,
		background_image,
		released,
		rating,
		description,
	});
	console.log(genres);
	const genreBDD = await Genre.findAll({
		where: {
			name: genres,
		},
	});
	console.log(genreBDD);
	createVideoGames.addGenre(genreBDD);

	return createVideoGames;
};

module.exports = postGames;
