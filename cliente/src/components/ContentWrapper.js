import React from 'react';
import Contentrowtop from './ContentRowTop';
import Footer from './Footer';
import Topbar from './TopBar';
import Table from './Table';

function Contentwrapper() {
	return (
		<React.Fragment>

		<div id="content-wrapper" className="d-flex flex-column">


			<div id="content">
				{/*Componentes importados */}

				<Topbar />

				<Contentrowtop />

			</div>

			<Table />

			<Footer />
			
		</div>

		</React.Fragment>
	)
}

export default Contentwrapper;
