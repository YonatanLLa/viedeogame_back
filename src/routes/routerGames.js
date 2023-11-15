const {Router} = require("express")
const {handlerVideoGames, handlerGamesById, handlerPostVideoGames} = require("../handlers/handlersGames")

const gamesRouter = Router()

gamesRouter.post("/", handlerPostVideoGames)
gamesRouter.get("/", handlerVideoGames)
gamesRouter.get("/:id", handlerGamesById)
module.exports = gamesRouter;

