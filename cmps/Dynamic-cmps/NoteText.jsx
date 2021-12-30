
export function NoteText(note){
    const {info , isPinned, id} = note.note

    return (
        <article className="card-note card text-white bg-danger mb-3">
            <h1 className="note-text" contenteditable="true">{info.txt}</h1>
        </article>
    )
}



