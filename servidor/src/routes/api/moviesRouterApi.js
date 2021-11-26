const express = require('express');
const { listMovieApi, createMovieApi, destroyMovieApi, detailMovieApi, recomendedMovieApi, updateMovieApi } = require('../../controllers/api/moviesControllerApi');

const router = express.Router();

//* /api/movies
router.get('/', listMovieApi);
router.get('/detail/:id', detailMovieApi);
router.post('/create', createMovieApi)
router.delete('/delete/:id', destroyMovieApi);
router.get('/recomended/:rating',recomendedMovieApi);
router.put('/update/:id',updateMovieApi);
module.exports = router;