import { Note } from '../../types'
import { NotesAction, NotesActionTypes } from '../types/notesTypes'

interface NotesState {
  notes: Note[];
}

const initialState = {
  notes: [],
};

export const notesReducer = (
  state: NotesState = initialState,
  action: NotesAction
) => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    default:
      return state;
  }
};