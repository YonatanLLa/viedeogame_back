const { Router } = require("express");
const morgan = require("morgan");
const express = require("express");
// const { route } = require('../app');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const gamesRouter = require("./routerGames");
const genresRouter = require("./routerGenres");

const router = Router();
router.use(morgan("dev"));
router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", gamesRouter);
router.use("/genres", genresRouter);
module.exports = router;
