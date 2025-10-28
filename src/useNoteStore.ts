import { create } from "zustand";

type Note = {
  id: string;
  title: string;
  content: string;
};

type NoteStore = {
  notes: Note[];
  addNote: (title: string, content: string) => void;
  deleteNote: (id: string) => void;
  deleteFirstNote: () => void;
};

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [
    {
      id: Math.random().toString(),
      title: "Welcome",
      content: "This is your first note!",
    },
  ],
  addNote: (title, content) =>
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
          },
        ],
      };
    }),
  deleteNote: (id) => {
    console.log("Deleting note ID:", id, typeof id);
    set((state) => {
      return {
        notes: state.notes.filter((val) => {
          console.log("deleting", val);
          return val.id !== id;
        }),
      };
    });
  },
  deleteFirstNote: () => {
    set((state) => {
      return {
        notes: state.notes.slice(1),
      };
    });
  },
}));
