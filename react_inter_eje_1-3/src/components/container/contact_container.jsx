import React from 'react';
//import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact_component';

const ContactContainer = () => {
	const defaultContact = new Contact('Juan Ginés', 'Alentà', 'juangalenta@hotmail.com', false);

	return (
		<div>
			<div>
				<h1>Contacto:</h1>
			</div>
			<ContactComponent contact={defaultContact}></ContactComponent>
		</div>
	);
};

//ContactContainer.propTypes = {};

export default ContactContainer;
