import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Componente tipo clase 
tiene constructor, props, state*/

//Se utiliza muy poco este tipo de componente es mejor el funcional con hooks

class Greeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 29,
		};
	}

	render() {
		return (
			<div>
				{/* utilizamos props que vienen de fuera */}
				<h1>¡Hola! {this.props.name}</h1>

				{/* utilizamos el state privado del componente */}
				<h2>Tu edad es de: {this.state.age}</h2>

				<div>
					<button onClick={this.birthday}>Cumplir años</button>
				</div>
			</div>
		);
	}

	// función que nos cambia el state.age
	birthday = () => {
		this.setState((prevState) => ({
			age: prevState.age + 1,
		}));
	};
}

// El propTypes controla los tipos de las props que vienen de fuera
Greeting.propTypes = {
	name: PropTypes.string,
};

export default Greeting;
