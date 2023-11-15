const {Router} = require("express")

const handerGetGenre = require("../handlers/handlersGenres")

const genresRouter = Router()

genresRouter.get("/", handerGetGenre)

module.exports = genresRouter