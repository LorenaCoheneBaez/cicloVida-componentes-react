// * Traigo los modelos de la db para usarlos como la API
const db = require('../../database/models');

module.exports = {
  //* Listo todas las peliculas
  listMovieApi: (req, res) => {
    db.Movie.findAll()
      .then(movies => {
        // * Configuro el status 200 (si la petición es exitosa)
        // * Traigo el total de datos del array
        // * Configuro la URL del endpoint
        const response = {
          meta: {
            status: 200,
            total: movies.length,
            url: 'api/movies'
          },
          //* la data son las peliculas que vienen de la db
          data: movies
        }
        //* Uso res.Json para que los datos sean Json y se puedan consumir
        res.json(response);
      })

  },
  //*Detalle de la pelicula pedida por parametro
  detailMovieApi: (req, res) => {
    db.Movie.findByPk(req.params.id)
      .then(movie => {
        const response = {
          meta: {
            status: 200,
            url: '/api/movie/:id'
          },
          //* la data son las peliculas que vienen de la db
          data: movie
        }
        res.json(response);
      })
  },
  recomendedMovieApi: (req, res) => {
    db.Movie.findAll({
      include: ['genre'],
      where: {
        rating: { [db.Sequelize.Op.gte]: req.params.rating }
      },
      order: [
        ['rating', 'DESC']
      ]
    })
      .then(movies => {
        let respuesta = {
          meta: {
            status: 200,
            total: movies.length,
            url: 'api/movies/recomended/:rating'
          },
          data: movies
        }
        res.json(respuesta);
      })
      .catch(error => console.log(error))
  },
  createMovieApi: (req, res)=> {
    const pelicula=db.Movie
      .create(
        {
          title: req.body.title,
          rating: req.body.rating,
          awards: req.body.awards,
          release_date: req.body.release_date,
          length: req.body.length,
          genre_id: req.body.genre_id
        }
      )
    res.json({
      operation: { type: "Add", status: "Se creó la pelicula" },
      pelicula})
      .then(confirm => {
        if (confirm) {
          let respuesta;
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/movies/create'
            },
            data: confirm
          }
          return res.redirect('/movies')
        } else {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/movies/create'
            },
            data: confirm
          }
        }
        res.json(respuesta);
      })
      //* Cuando mando el error mando el status del mismo y un msj
      .catch(error => res.json({
        error: error.toString().trim().slice().split("Error: ")[1],
        status: "La pelicula no fue creada"
      }))
  },
  updateMovieApi: (req, res) => {
    let movieId = req.params.id;
    Movies.update(
      {
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length,
        genre_id: req.body.genre_id
      },
      {
        where: { id: movieId }
      })
      .then(confirm => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/movies/update/:id'
            },
            data: confirm
          }
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: 'api/movies/update/:id'
            },
            data: confirm
          }
        }
        res.json(respuesta);
      })
      .catch(error => res.send(error))
  },
  destroyMovieApi:  (req, res) =>{
    let movieId = req.params.id;
    db.Movie
      .destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then(confirm => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/movies/destroy/:id'
            },
            data: confirm
          }
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: 'api/movies/destroy/:id'
            },
            data: confirm
          }
        }
        res.json(respuesta);
      })
          .catch(error => res.json({
            error: error.toString().trim().slice().split("Error: ")[1],
            status: "La pelicula no se pudo borrar."
          }))
     }
}
