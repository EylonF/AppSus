// import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteVideo({note, onDeleteNote, noteColor}) {   

    return (
        <article className="card-note card text-white"style={{ backgroundColor: noteColor }} >
            <h4 contenteditable="true">{note.info.title}</h4>
            <iframe width="400" height="295"
                src={note.info.url}>
            </iframe>
            {/* <NoteActionBar note={note} onDeleteNote={onDeleteNote}/> */}
        </article>
    )
}

