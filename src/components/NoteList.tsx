import NoteItem from "./NoteItem";
import type { Note } from "../types";

type NoteListProps = {
    notes: Note[];
    onDelete: (id: string) => void;
    onUpdate: (id: string, title: string, content: string, tags: string[]) => void;
};

export default function NoteList({ notes, onDelete, onUpdate}: NoteListProps){
    return(
        <div className="space-y-4">
            {notes.map((note)=> (
                <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onUpdate={onUpdate}
                />
            ))}
        </div>
    );
}