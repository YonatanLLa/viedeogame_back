const videoAllGames = require("../controllers/getGames");
const getGamesById = require("../controllers/getGamesById");
const getGamesByName = require("../controllers/getGamesByName");
const postGames = require("../controllers/postGames");
const getFavorites = require("../controllers/getFavorites");


const handlerPostVideoGames = async (req, res) => {
  try {
    const {
      name,
      platforms,
      background_image,
      released,
      rating,
      description,
      genres,
    } = req.body;
    const postAllGames = await postGames(
      name,
      platforms,
      background_image,
      released,
      rating,
      description,
      genres
    );
    res.status(200).json(postAllGames);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerVideoGames = async (req, res) => {
  try {
    const { name } = req.query;
    console.log("VideoGames");

    const allGames = name ? await getGamesByName(name) : await videoAllGames();

    res.status(200).json(allGames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGamesById = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "DDB" : "ID";
    const allGamesById = await getGamesById(id, source);
    res.status(200).json(allGamesById);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const handleFavorite = async(req, res) => {
  const { gameId } = req.params;
  try {
    const favorite = await getFavorites(favId, gameId);

  } catch (error) {}
};

module.exports = {
  handlerVideoGames,
  handlerGamesById,
  handlerPostVideoGames,
  handleFavorite,
};
