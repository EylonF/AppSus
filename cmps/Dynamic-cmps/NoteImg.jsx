
export function NoteImg(note){
    const {info , isPinned, id, style } = note.note

    return (
        <article className="card-note card text-white bg-success mb-3">
            <h3 contenteditable="true">{info.title}</h3>
            <img src={info.url} alt="" />
        </article>
    )
}