import React from 'react';
import Metricas from './Metricas.js';

const data = [
	{
		color: 'primary',
		title: 'Movies in Data Base',
		value: 21,
		icono: 'fa-film',
	},
	{
		color: 'success',
		title: 'Total awards',
		value: 79,
		icono: 'fa-award',
	},
	{
		color: 'warning',
		title: 'Actors quantity',
		value: 49,
		icono: 'fa-user',
	}
];

function Contentrowmovie() {
	return (
		<React.Fragment>
			<div className="row">
			{/*Itero todas las props del objeto*/}
			{
				data.map((item, index) => {
					return <Metricas
						key={index + item.title}
						color={item.color}
						title={item.title}
						value={item.value}
						icono={item.icono}
					/>
				})
			}     
					</div>
   </React.Fragment >
    )
}
export default Contentrowmovie;
