import { useNoteStore } from "./store/useNoteStore";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
import { useTagStore } from "./store/useTagStore";
import TagFilter from "./components/TagFilter";
import { useMemo } from "react";


function App() {
  const notes = useNoteStore(state => state.notes);
  const selectedTags = useTagStore(state => state.selectedTags);
  const { deleteNote, updateNote } = useNoteStore();

  const filteredNotes = useMemo(() => {
    if(selectedTags.length === 0) return notes;
    return notes.filter(note => 
      selectedTags.every(tag => note.tags.includes(tag))
    );
  }, [notes, selectedTags]);

  console.log("All notes: ", notes);
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Notes with Tags</h1>
        <AddNoteForm />
        <TagFilter />
        <NoteList
          notes={filteredNotes}
          onDelete={deleteNote}
          onUpdate={updateNote}
        ></NoteList>
      </div>
    </div>
  );
}

export default App;
