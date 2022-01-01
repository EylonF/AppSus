// import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteImg({note, onDeleteNote ,noteColor}){
   
    return (
        <article className="card-note" style={{ backgroundColor: noteColor }} >
            <h3 contenteditable="true">{note.info.title}</h3>
            <img src={note.info.url} alt="" />
            {/* <NoteActionBar note={note} onDeleteNote={onDeleteNote}/ */}
        
        </article>
    )
}