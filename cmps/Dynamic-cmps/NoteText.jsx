// import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteText({note, onDeleteNote, noteColor}){
    

    return (
        <article className="card-note" style={{ backgroundColor: noteColor }}  >
            <h1 className="note-text" contenteditable="true">{note.info.txt}</h1>
            {/* <NoteActionBar note={note} onDeleteNote={onDeleteNote}/> */}
        </article>
    )
}



