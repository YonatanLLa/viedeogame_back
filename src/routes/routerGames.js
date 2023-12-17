const {Router} = require("express")
const {handlerVideoGames, handlerGamesById, handlerPostVideoGames, handleFavorite} = require("../handlers/handlersGames")

const gamesRouter = Router()

gamesRouter.post("/", handlerPostVideoGames)
gamesRouter.get("/", handlerVideoGames)
gamesRouter.get("/:id", handlerGamesById)
gamesRouter.get("/:gameId", handleFavorite)
module.exports = gamesRouter;

