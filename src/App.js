import React, { Component } from 'react';
import {connect} from 'react-redux';
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {id: 1, noteContent: 'Note 1 !'},
        {id: 2, noteContent: 'Note 2 !'}
      ],
    }
  }

  addNoteApp = (note) => {
    const previousNotes = this.state.notes;
    previousNotes.push({ id: Date.now(), noteContent: note });
    this.setState ({
      notes: previousNotes,
    })

   
  }

  render() {
    console.log(this.props.testStore);
    return (
      <div className="App">
        <h1>ToDo List App</h1>

          <NoteForm addNote={this.addNoteApp} />

          <ul>
            {
              this.state.notes.map(note =>
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
              )
            }
          </ul>  

          <hr/>

          <h2>TaskER</h2>          
          <input type="text"  />
          <button>AddTask</button>
          <ul>
            {this.props.testStore.map(note =>
              <li key={note.id}>{note.taskContent}</li>
            )}
          </ul>              
       
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
