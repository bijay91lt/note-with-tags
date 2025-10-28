import { create } from "zustand";
import type { Note } from "../types";

type NoteStore = {
  notes: Note[];
  addNote: (title: string, content: string, tags?: string[]) => void;
  deleteNote: (id: string) => void;
  updateNote: (id: string, title: string, content: string, tags:string[]) => void;
};

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [
    {
      id: Math.random().toString(),
      title: "Welcome",
      content: "This is your first note!",
      tags: ['welcome', 'demo']
    },
  ],
  addNote: (title, content, tags = []) =>
    set((state) => {
      const id = Math.random().toString();
      console.log("Creating id of ", id);
      return {
        notes: [
          ...state.notes,
          {
            id: id,
            title: `${title + state.notes.length.toString()}`,
            content,
            tags
          },
        ],
      };
    }),
  deleteNote: (id) => {
    console.log("Deleting note ID:", id, typeof id);
    set((state) => {
      return {
        notes: state.notes.filter((note) => {
          console.log("deleting", note);
          return note.id !== id;
        }),
      };
    });
  },
  updateNote: (id, title, content, tags = []) => {
    console.log("UpdateLogic", id, typeof id);
    set((state) => {
      return {
        notes: state.notes.map((note) => 
          note.id === id ? { ...note, title, content, tags }: note
        ),
      };
    });
  },
}));
