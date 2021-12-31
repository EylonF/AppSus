import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteVideo({note, onDeleteNote}) {   

    return (
        <article className="card-note card text-white bg-secondary mb-3">
            <h4 contenteditable="true">{note.info.title}</h4>
            <iframe width="400" height="295"
                src={note.info.url}>
            </iframe>
            <NoteActionBar note={note} onDeleteNote={onDeleteNote}/>
        </article>
    )
}

