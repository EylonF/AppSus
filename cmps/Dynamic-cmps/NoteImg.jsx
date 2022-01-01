import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteImg({note, onDeleteNote ,noteColor, onChangeNoteColor}){
   
    return (
        <article className="card-note" style={{ backgroundColor: noteColor }} >
            <h3 contenteditable="true">{note.info.title}</h3>
            <img src={note.info.url} alt="" />
            <NoteActionBar 
                onDeleteNote={onDeleteNote}
                note={note}
                onChangeNoteColor={onChangeNoteColor}
                />

        </article>
    )
}