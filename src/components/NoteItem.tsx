import { useState, useEffect } from "react";
import type { Note } from "../types";


type NoteItemProps = {
  note: Note;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string, content: string) => void;
};

export default function NoteItem({ note, onDelete, onUpdate }: NoteItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  useEffect(() => {
    console.log(JSON.stringify(note, null, 2));
  }, [note])

  const handleSave = () => {
    onUpdate(note.id, title, content);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholder="Title"
        />
        <textarea
          name=""
          id=""
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          rows={3}
          placeholder="Content"
        ></textarea>
        <div>
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-3 py-1 bg-gray-500 text-white text-sm rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{note.title}</h2>
      <p className="mt-2 text-gray-700">{note.content}</p>
      <div className="mt-3 space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
