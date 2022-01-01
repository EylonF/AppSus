import { NotePreview } from './NotePreview.jsx'

export function NoteList({notes, onDeleteNote,loadNotes}) {
    // console.log('note for list',notes)
    return (
        <section className="note-list">
            {notes.map(note => <NotePreview note={note} onDeleteNote={onDeleteNote} loadNotes={loadNotes}/>)}
        </section>
    )
}