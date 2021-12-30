
export function NoteImg(note){
    const {info , isPinned, id, style } = note.note

    return (
        <article className="card-note card text-white bg-success mb-3">
            <p>{info.title}</p>
            <img src={info.url} alt="" />
        </article>
    )
}