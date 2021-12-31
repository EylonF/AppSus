import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteImg({note, onDeleteNote}){
   
    return (
        <article className="card-note card text-white bg-success mb-3">
            <h3 contenteditable="true">{note.info.title}</h3>
            <img src={note.info.url} alt="" />
            <NoteActionBar note={note} onDeleteNote={onDeleteNote}/>
        
        </article>
    )
}