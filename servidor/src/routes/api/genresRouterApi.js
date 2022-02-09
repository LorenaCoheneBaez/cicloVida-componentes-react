const express = require('express');
const { listGenreApi, detailGenreApi, genreMoviesApi } = require('../../controllers/api/genresControllerApi');
const router = express.Router();

//* /api/genres
router.get('/', listGenreApi);
router.get('/detail/:id', detailGenreApi);
router.get('/:id/movies',genreMoviesApi);

module.exports = router;