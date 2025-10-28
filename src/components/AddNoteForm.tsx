import { useState } from "react";
import { useNoteStore } from "../store/useNoteStore";

export default function AddNoteForm() {
  const addNote = useNoteStore((state) => state.addNote);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tags = tagsInput
      .split(",")
      .map(tag => tag.trim())
      .filter((tag) => tag  !== "");

    addNote(title, content, tags);

    setTitle("");
    setContent("");
    setTagsInput("");
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6"
    >
      <h2 className="text-lg font-semibold mb-3">Add New Note</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Title"
        required
      />

      <textarea
        name=""
        id=""
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        rows={3}
        placeholder="Content"
        required
      ></textarea>

      <input
        type="text"
        value={tagsInput}
        onChange={(e) => setTagsInput(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-3"
        placeholder="Tags (comma-separated, e.g. work, idea)"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Create Note
      </button>
    </form>
  );  
}
