import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteText({note, onDeleteNote, noteColor, onChangeNoteColor}){
    

    return (
        <article className="card-note" style={{ backgroundColor: noteColor }}  >
            <h1 className="note-text" contenteditable="true">{note.info.txt}</h1>
            <NoteActionBar 
                onDeleteNote={onDeleteNote}
                note={note}
                onChangeNoteColor={onChangeNoteColor}
                />
     
        </article>
    )
}



