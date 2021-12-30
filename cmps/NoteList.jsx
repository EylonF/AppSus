import {DynamicNote } from './Dynamic-cmps/DynamicNote.jsx'

export function NoteList({notes}) {
    console.log('note for list',notes)
    return (
        <section className="note-list">
            <h1>Note list</h1>
            {notes.map(note => <DynamicNote note={note}/>)}
        </section>
    )
}