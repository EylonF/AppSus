import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes, onDeleteNote, loadNotes }) {

    return (

        <section>
            <div className="note-list">
                {notes.map(note => (
                    <NotePreview note={note} onDeleteNote={onDeleteNote} loadNotes={loadNotes} />
                ))}
            </div>
        </section>
    )

}