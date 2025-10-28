import { useEffect } from "react";
import { useNoteStore } from "./useNoteStore";

function App() {
  const { notes, addNote, deleteNote, deleteFirstNote } = useNoteStore();
  useEffect(() => {
    console.log("bijay logs");
    console.log(JSON.stringify(notes, null, 2));
  }, [notes]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl fonr-bold mb-4">Simple Note</h1>

        <button
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => addNote("New Note", "Write something here...")}
        >
          + Add Note
        </button>
        <button
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => deleteFirstNote()}
        >
          delete note
        </button>

        <div className="spacy-y-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="mt-2 text-gray-700">{note.content}</p>
              <button
                className="mt-3 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
