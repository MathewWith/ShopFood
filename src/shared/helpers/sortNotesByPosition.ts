import { Note } from "../models/note"

export {}

export function sortNotesByPosition(notes: Note[]) {
    notes.sort((a: Note, b: Note) => a.position > b.position ? 1 : -1)
}