import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import NewTask from './components/NewTask';
import { NoteState } from './noteReducer';
import { addNote } from './actions';

function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>(state => state.notes)

  const dispatch = useDispatch();

  const onAddNote = (note:string) => {
    dispatch(addNote(note));
  }
  return (
    <ThemeProvider>
      <CSSReset />
      <NewTask addNote={onAddNote} />
      <ul style={{margin:'7%'}}>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </ThemeProvider>
  );
}

export default App;