// * Traigo los modelos de la db para usarlos como la API
const db = require('../../database/models');

module.exports = {
  //* Listo todas los actores
  listActorsApi: (req, res) => {
    db.Actor.findAll()
      .then(actors => {
        // * Configuro el status 200 (si la petición es exitosa)
        // * Traigo el total de datos del array
        // * Configuro la URL del endpoint
        const response = {
          meta: {
            status: 200,
            total: actors.length,
            url: 'api/actors'
          },
          //* la data son los actores que vienen de la db
          data: actors
        }
        //* Uso res.Json para que los datos sean Json y se puedan consumir
        res.json(response);
      })

  },
  //*Detalle del actor pedida por parametro
  detailActorsApi: (req, res) => {
    db.Actor.findByPk(req.params.id)
      .then(actor => {
        const response = {
          meta: {
            status: 200,
            url: '/api/actor/:id'
          },
          //* la data son los actores que vienen de la db
          data: actor
        }
        res.json(response);
      })
  },
  //* Actores por peliculas
  actorMoviesApi: (req, res) => {
    db.Actor.findByPk(req.params.id, {
      include: ['movies']
    })
      .then(actor => {
        let respuesta = {
          meta: {
            status: 200,
            total: actor.length,
            url: '/api/actor/:id'
          },
          data: actor
        }
        res.json(respuesta);
      });
  },
  //Para agregar actores
  createActorsApi: (req, res) => {
    Actors
      .create(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          rating: req.body.rating,
          favorite_movie_id: req.body.favorite_movie_id
        }
      )
      .then(confirm => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/actors/create'
            },
            data: confirm
          }
        } else {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/actors/create'
            },
            data: confirm
          }
        }
        res.json(respuesta);
      })
      .catch(error => res.send(error))
  },
  //*Editar actores
  updateActorsApi: (req, res) => {
    let actorId = req.params.id;
    Actors.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        rating: req.body.rating,
        favorite_movie_id: req.body.favorite_movie_id,
      },
      {
        where: { id: actorId }
      })
      .then(confirm => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/actors/update/:id'
            },
            data: confirm
          }
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: 'api/actors/update/:id'
            },
            data: confirm
          }
        }
        res.json(respuesta);
      })
      .catch(error => res.send(error))
  },
//*Eliminar actores
  destroyActorsApi: (req, res) => {
    let actorId = req.params.id;
    Actors
      .destroy({ where: { id: actorId }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then(confirm => {
        let respuesta;
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: 'api/actors/delete/:id'
            },
            data: confirm
          }
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: 'api/actors/delete/:id'
            },
            data: confirm
          }
        }
        res.json(respuesta);
      })
      .catch(error => res.send(error))
  }
}