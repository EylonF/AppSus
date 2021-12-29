import {NotePreview} from './NotePreview.jsx'

export function NoteList({notes}) {
    console.log('note for list',notes)
    return (
        <section className="note-list">
            <h1>Note list</h1>
            {notes.map(note => <NotePreview key={note.id} note={note}/>)}
        </section>
    )
}