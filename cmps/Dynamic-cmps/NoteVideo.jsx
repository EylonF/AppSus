// import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteVideo({note, onDeleteNote, noteColor}) {   

    return (
        <article className="card-note"style={{ backgroundColor: noteColor }} >
            <h4 contenteditable="true">{note.info.title}</h4>
            <iframe width="300" height="195"
                src={note.info.url}>
            </iframe>
            {/* <NoteActionBar note={note} onDeleteNote={onDeleteNote}/> */}
        </article>
    )
}

