import { useNoteStore } from "./store/useNoteStore";
import NoteList from "./components/NoteList";
import AddNoteButton from "./components/AddNoteButton";

function App() {
  const { notes, addNote, deleteNote, updateNote } = useNoteStore();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Notes with Edit</h1>

        <AddNoteButton
          onAdd={() => addNote("New Note", "Write something here...")}
        ></AddNoteButton>

        <NoteList
          notes={notes}
          onDelete={deleteNote}
          onUpdate={updateNote}
        ></NoteList>
      </div>
    </div>
  );
}

export default App;
