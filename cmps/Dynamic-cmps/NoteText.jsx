import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteText({note, onDeleteNote}){
    

    return (
        <article className="card-note card text-white bg-danger mb-3">
            <h1 className="note-text" contenteditable="true">{note.info.txt}</h1>
            <NoteActionBar note={note} onDeleteNote={onDeleteNote}/>

        </article>
    )
}



