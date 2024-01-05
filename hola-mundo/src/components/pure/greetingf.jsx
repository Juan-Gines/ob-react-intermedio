import React, { useState } from 'react'; //importamos el hook useState
import PropTypes from 'prop-types';

//Componente funcional al cual

const Greetingf = (props) => {
	//introducimos el useState
	//const [variable, método para actualizarlo] = useState(valor inicial)
	const [age, setage] = useState(29);

	const birthday = () => {
		//actualizamos el stage
		setage(age + 1);
	};

	return (
		<div>
			{/* utilizamos props que vienen de fuera */}
			<h1>¡Hola {props.name} desde componente funcional!</h1>

			{/* utilizamos el state privado del componente */}
			<h2>Tu edad es de: {age}</h2>

			<div>
				<button onClick={birthday}>Cumplir años</button>
			</div>
		</div>
	);
};

Greetingf.propTypes = {
	name: PropTypes.string,
};

export default Greetingf;
