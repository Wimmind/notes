import { Note } from '../../types';
import { NotesAction, NotesActionTypes } from '../types/notesTypes'

export const addNote = (note: Note): NotesAction => {
  return {
    type: NotesActionTypes.ADD_NOTE,
    payload: note,
  };
};
