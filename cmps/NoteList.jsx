import {DynamicNote } from './Dynamic-cmps/DynamicNote.jsx'

export function NoteList({notes}) {
    console.log('note for list',notes)
    return (
        <section className="note-list">
            {notes.map(note => <DynamicNote note={note}/>)}
        </section>
    )
}