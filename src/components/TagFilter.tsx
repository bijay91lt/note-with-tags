import { useTagStore } from "../store/useTagStore";
import { useMemo } from "react";
import { useNoteStore } from "../store/useNoteStore";

export default function TagFilter() {
  const notes = useNoteStore(state => state.notes);
  const selectedTags = useTagStore((state) => state.selectedTags);
  const toggleTag = useTagStore((state) => state.toggleTag);
  const clearFilters = useTagStore((state) => state.clearFilters);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    notes.forEach(note => {
        note.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [notes]);

  if (allTags.length === 0) return null;

  return (
    <div className="mb-6 p-4 bg-white rounded shadow">
      <h3 className="font-semibold mb-2">FilterWhere: </h3>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 text-sm rounded ${
              selectedTags.includes(tag)
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>
      {selectedTags.length > 0 && (
        <button
          onClick={clearFilters}
          className="mt-2 text-sm text-red-500 hover:underline"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
