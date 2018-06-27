import React, { Component } from 'react';
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

  render() {
    return (
      <div className="App">
        <h1>ToDo List App</h1>
          {
            this.state.notes.map(note =>
              <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
            )
          }
          
        <NoteForm/>
      </div>
    );
  }
}

export default App;
