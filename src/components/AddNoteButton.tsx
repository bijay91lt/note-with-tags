type AddNoteButtonProps = {
  onAdd: () => void;
};

export default function AddNoteButton({ onAdd }: AddNoteButtonProps) {
  return (
    <button
      onClick={onAdd}
      className="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      + Add Note
    </button>
  );
}
