import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact }) => {
	const [conectado, setConectado] = useState(contact.conectado);

	const con = () => {
		setConectado(conectado ? false : true);
	};
	return (
		<div>
			<div>
				<button onClick={con}>cambiar conexion</button>
			</div>
			<h2>Nombre: {contact.nombre}</h2>
			<h3>Apellido: {contact.apellido}</h3>
			<h4>Email: {contact.email} </h4>
			<h5>{conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h5>
		</div>
	);
};

ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
