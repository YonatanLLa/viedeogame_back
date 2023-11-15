const getGenres = require("../controllers/getGenres");

const handerGetGenre = async (req, res) => {
    try {
        const getAllGenres = await getGenres()
        res.status(200).json(getAllGenres)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};
module.exports = handerGetGenre;
