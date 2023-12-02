const { Router } = require("express");

const { handlerLogin, handlerRegister } = require("../handlers/handlersLogin");

const usersRouter = Router();

usersRouter.post("/sing-up", handlerRegister);
usersRouter.post("/log-in", handlerLogin);

module.exports = usersRouter;
