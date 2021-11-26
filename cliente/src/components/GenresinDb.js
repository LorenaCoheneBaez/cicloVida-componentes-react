import Genre from './Genre';
import React, {Component} from 'react';

class Genresindb extends Component {
	//Con el contructor traigo las props
	constructor(props){
		super(props);
		this.state={
			genresList: [],
			fondoCaja: ''
		}
	}
	 getGenres() {
		 fetch('http://localhost:3001/api/genres/')
		.then(res => res.json())
		.then(respuesta => {
			this.setState({ genresList: respuesta.data })
		}).catch(error => console.log(error));
	}

    componentDidMount() {
		this.getGenres();
	}
    render() {
		return (
			<React.Fragment>
				{/*<!-- Categories in DB -->*/}
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
						</div>
						<div className={`card-body colorFondo ${this.state.fondoCaja}`}>
							<div className="row">
								{
									this.state.genresList.map((item, index) => {
										return <Genre {...item} key={item + index} />
									})
								}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
 
export default Genresindb;
