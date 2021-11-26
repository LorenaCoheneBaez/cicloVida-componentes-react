const express = require('express');
const { listActorsApi, detailActorsApi, actorMoviesApi, createActorsApi, destroyActorsApi, updateActorsApi } = require('../../controllers/api/actorsControllerApi');

const router = express.Router();

//* /api/actors
//Lista de actores
router.get('/', listActorsApi);
//Detalle de info de actores
router.get('/detail/:id', detailActorsApi);
//Actor por pelicula
router.get('/:id/movies', actorMoviesApi);
//Agregar un actor
router.post('/create', createActorsApi);
//Modificar un actor
router.put('/update/:id', updateActorsApi);
//Eliminar un actor
router.delete('/delete/:id', destroyActorsApi);

module.exports = router;