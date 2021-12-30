import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVideo } from './NoteVideo.jsx'


export function DynamicNote(note){
    
    switch (note.note.type) {
        case "note-txt":
            return <NoteText {...note} />
        case "note-img":
            return <NoteImg {...note} />
        case "note-todos":
            return <NoteTodos {...note} />
        case "note-video":
            return <NoteVideo {...note} />
           

            default:
               return <React.Fragment></React.Fragment>
            }
        }