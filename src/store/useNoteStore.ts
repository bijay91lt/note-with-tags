import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Note } from '../types';

type NoteStore = {
  notes: Note[];
  addNote: (title: string, content: string, tags: string[]) => void;
  deleteNote: (id: string) => void;
  updateNote: (id: string, title: string, content: string, tags: string[]) => void;
};

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      notes: [
        {
          id: crypto.randomUUID(),
          title: 'Welcome',
          content: 'This is your first note!',
          tags: ['welcome', 'demo'],
        },
      ],
      addNote: (title, content, tags) =>
        set((state) => ({
          notes: [...state.notes, { id: crypto.randomUUID(), title, content, tags }],
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
      updateNote: (id, title, content, tags) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, title, content, tags } : note
          ),
        })),
    }),
    {
      name: 'notes-storage', 
      storage: createJSONStorage(() => localStorage), 
      partialize: (state) => ({ notes: state.notes }),
    }
  )
);