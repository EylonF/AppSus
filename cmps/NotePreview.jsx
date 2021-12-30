import { DynamicNote } from "./Dynamic-cmps/DynamicNote.jsx"

export function NotePreview({ note }) {
    console.log('note from preview',note)
    return (
        <article className="note-preview">
            <DynamicNote />
            {/* <img src={book.thumbnail} alt="" /> */}
            {/* <h3>Title: {book.title}</h3> */}
            {/* <h4>Price:{bookPrice}</h4> */}
            {/* &#9733; */}
        </article>
    )
}
