import React from "react";
import NoteCreationForm from '../components/NoteCreationForm';
import { Note } from '../types';
import { useActions } from "../hooks/useActions";

const Home: React.FC = () => {
  const { addNote } = useActions();
  const saveNote = (note: Note) => addNote(note)

  return (
    <NoteCreationForm onSubmit={saveNote} />
  );
}

export default Home;