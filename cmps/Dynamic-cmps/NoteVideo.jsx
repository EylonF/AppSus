import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteVideo({note, onDeleteNote, noteColor, onChangeNoteColor}) {   

    return (
        <article className="card-note"style={{ backgroundColor: noteColor }} >
            <h4 contenteditable="true">{note.info.title}</h4>
            <iframe width="400" height="205"
                src={note.info.url}>
            </iframe>
            <NoteActionBar 
                onDeleteNote={onDeleteNote}
                note={note}
                onChangeNoteColor={onChangeNoteColor}
                />
            
        </article>
    )
}

