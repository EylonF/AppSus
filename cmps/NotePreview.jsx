import { DynamicNote } from "./Dynamic-cmps/DynamicNote.jsx"

export function NotePreview({ note }) {
    console.log('note from preview',note)
    return (
        <article className="note-preview">
            <DynamicNote />
        </article>
    )
}
