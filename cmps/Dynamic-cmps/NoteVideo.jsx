import ReactPlayer from 'react-player'

export function NoteVideo(note){
    const {info , isPinned, id, style } = note.note

    return (
        <article className="card-note card text-white bg-secondary mb-3">
            <h4>{info.title}</h4>
            <iframe width="400" height="295"
                src={info.url}>
            </iframe>
        </article>
    )
}