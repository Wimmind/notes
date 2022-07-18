import { Note } from '../../types'

export enum NotesActionTypes {
  ADD_NOTE = "ADD_NOTE",
}

interface addNoteAction {
  type: NotesActionTypes.ADD_NOTE;
  payload: Note;
}

export type NotesAction = addNoteAction