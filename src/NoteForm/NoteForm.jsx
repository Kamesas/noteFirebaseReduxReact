import React from 'react';

export default class NoteForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newNoteContent: "",
		};
	}

	handleUserInput = (e) => {
    this.setState({
    	newNoteContent: e.target.value
    });
  }

  writeNote = () => {
  	this.props.addNote(this.state.newNoteContent);
  	this.setState({
  		newNoteContent: '',
  	})
  }

	render() {
		return (
			<div>
					<input type="text" placeholder="write here..." 
								 value={this.state.newNoteContent}
								 onChange={this.handleUserInput}
					/>
					<button onClick={this.writeNote} >Add Note</button>
			</div>
		);
	}
}