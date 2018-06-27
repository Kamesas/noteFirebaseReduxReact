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
			<div className="Note">
					{ this.noteContent }
			</div>
		);
	}

}

Note.propTypes = {
	noteContent: PropTypes.string
}
