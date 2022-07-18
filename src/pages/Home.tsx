import React from "react";
import { useState } from "react";
import NoteCreationForm from '../components/NoteCreationForm';
import { Note } from '../types';
import Modal from '@mui/material/Modal';

const Home: React.FC = () => {
  const saveNote = (note: Note) => {

  }

  return (
    <NoteCreationForm onSubmit={saveNote} />
  );
}

export default Home;