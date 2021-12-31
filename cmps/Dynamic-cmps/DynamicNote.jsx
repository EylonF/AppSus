import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVideo } from './NoteVideo.jsx'


export function DynamicNote({note, onDeleteNote}){
    
    switch (note.type) {
        case "note-txt":
            return <NoteText note={note} onDeleteNote={onDeleteNote} />
        case "note-img":
            return <NoteImg note={note} onDeleteNote={onDeleteNote} />
        // case "note-todos":
        //     return <NoteTodos note={note} onDeleteNote={onDeleteNote} />
        case "note-video":
            return <NoteVideo note={note} onDeleteNote={onDeleteNote} />
           

            default:
               return <React.Fragment></React.Fragment>
            }
        }