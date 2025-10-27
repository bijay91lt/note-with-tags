import { create } from 'zustand';

type Note = {
    id: string;
    title: string;
    content: string;
};

type NoteStore = { 
    notes: Note[];
    addNote: (title: string, content: string) => void;
    deleteNote: (id: string) => void;
};

export const useNoteStore = create<NoteStore>((set) => ({
    notes: [
        { id: '1', title: 'Welcome', content: 'This is your first note!'},
    ],
    addNote: (title, content) => 
        set((state) => ({
            notes: [
                ...state.notes,
                {id: Date.now().toString(), title, content},
            ],
        })),
    deleteNote: (id) => 
        set((state) => ({
            notes: state.notes.filter((note) => note.id ! == id),
        })),
}));