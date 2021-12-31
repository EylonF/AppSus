import { DynamicNote } from './Dynamic-cmps/DynamicNote.jsx'

export function NoteList({notes, onDeleteNote}) {
    // console.log('note for list',notes)
    return (
        <section className="note-list">
            {notes.map(note => <DynamicNote note={note} onDeleteNote={onDeleteNote}/>)}
        </section>
    )
}