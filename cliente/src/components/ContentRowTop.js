//Importo los componentes que tengo separados
import React from "react";
import Contentrowmovie from "./ContentRowMovie";
import Lastmovieindb from "./LastMovieinDb";
import Genresindb from "./GenresinDb";

function Contentrowtop() {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <Contentrowmovie />
        {/*<!-- End movies in Data Base -->*/}

        <div className="row">
          {/*<!-- Content Row Last Movie in Data Base -->*/}
          <Lastmovieindb />
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!-- Genres in DB -->*/}
          <Genresindb />

          {/*<!--End Genres In Db-->*/}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contentrowtop;
