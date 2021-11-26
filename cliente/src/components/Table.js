import React, { Component } from "react";
import TableRow from "./TableRow";


class Table extends Component {

  constructor() {
    super();
    this.state = {
      moviesList: []
    }
  }
  //Acá traigo las peliculas de la db (api)
  
  componentDidMount() {
    fetch('http://localhost:3001/api/movies/')
      .then(res => res.json())
      .then(respuesta => {
        this.setState({ moviesList: respuesta.data })
      })
      .catch(error => console.log(error));
    }
  

  render(){
    return (
      <React.Fragment>
      <div className="container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Rating</th>
              <th scope="col">Premios</th>
            </tr>
          </thead>
          <tbody>
            {/*Mapeo lo que traigo en el contructor desde la db(api)*/}
            {this.state.moviesList.map((item, index) => {
              return (
                <TableRow
                  key={index + item.title}
                  title={item.title}
                  rating={item.rating}
                  awards={item.awards}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      </React.Fragment>
    );
  }
    
};
export default Table;
