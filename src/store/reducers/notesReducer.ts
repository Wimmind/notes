import { Note } from '../../types'
import { NotesAction, NotesActionTypes } from '../types/notesTypes'

interface NotesState {
  notes: Note[];
}

const initialNotes = localStorage.getItem('notes_list')
const initialState = {
  notes: initialNotes ? JSON.parse(initialNotes) : [],
};

export const notesReducer = (
  state: NotesState = initialState,
  action: NotesAction
) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE: {
      const notes = [...state.notes, action.payload]
      localStorage.setItem('notes_list', JSON.stringify(notes))
      return { ...state, notes };
    }
    default:
      return state;
  }
};