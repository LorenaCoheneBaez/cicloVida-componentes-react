// * Traigo los modelos de la db para usarlos como la API
const db = require('../../database/models');

module.exports = {
  //* Listo todos los generos
    listGenreApi: (req,res) =>{
        db.Genre.findAll()
        .then(genres => {
          // * Configuro el status 200 (si la petición es exitosa)
          // * Traigo el total de datos del array
          // * Configuro la URL del endpoint
            const response = {
                meta:{
                    status:200,
                    total : genres.length,
                    url: 'api/genres'
                },
                //* la data son los generos que vienen de la db
                data : genres
            }
            //* Uso res.Json para que los datos sean Json y se puedan consumir
            res.json(response);
        })
    
    }, 
    //*Detalle del genero por parametro
    detailGenreApi: (req,res) =>{
        db.Genre.findByPk(req.params.id)
            .then(genre =>{
                const response ={
                    meta: {
                        status: 200,
                        url: '/api/genre/:id'
                    },
                    //* la data son los generos que vienen de la db
                    data: genre
                }
                res.json(response);
            })
    },
    genreMoviesApi: (req, res) => {
        db.Genre.findByPk(req.params.id, {
            include: ['movies']
        })
            .then(genre => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genre.length,
                        url: '/api/genre/:id/movies'
                    },
                    data: genre
                }
                res.json(respuesta);
            });
    }
}