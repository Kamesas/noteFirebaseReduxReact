import React from 'react';
import PropTypes from 'prop-types';

export default class Note extends React.Component {
	
	constructor(props) {
		super(props);
		this.noteContent = props.noteContent;
		this.noteId = props.noteId;
	}

	render(props) {
		return (
			<React.Fragment>
				
				<li>
					{ this.noteContent }
				</li>
								
			</React.Fragment>
		);
	}

}

Note.propTypes = {
	noteContent: PropTypes.string
}
