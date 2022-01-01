import { NotePreview } from './NotePreview.jsx'
import { Masonry } from '../lib/react-masonry-css.js'

export function NoteList({ notes, onDeleteNote, loadNotes }) {
    // console.log('note for list',notes)
    return (

        // <Masonry
        // breakpointCols={3}
        // className="my-masonry-grid"
        // columnClassName="my-masonry-grid_column"
        
        // >

        <section>
            <div className="note-list">
                {notes.map(note => (
                    <NotePreview note={note} onDeleteNote={onDeleteNote} loadNotes={loadNotes} />
                    ))}
                    </div>
                    </section>
    )
    {/* </Masonry> */}
}