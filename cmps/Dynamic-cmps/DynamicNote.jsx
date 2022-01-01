import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'
import { NoteVideo } from './NoteVideo.jsx'


export function DynamicNote({note, onDeleteNote, noteColor, onChangeNoteColor}){
    
    switch (note.type) {
        case "note-txt":
            return <NoteText note={note} onDeleteNote={onDeleteNote} noteColor={noteColor} onChangeNoteColor={onChangeNoteColor} />
        case "note-img":
            return <NoteImg note={note} onDeleteNote={onDeleteNote} noteColor={noteColor} onChangeNoteColor={onChangeNoteColor} />
        case "note-todos":
            return <NoteTodos note={note} onDeleteNote={onDeleteNote} noteColor={noteColor} onChangeNoteColor={onChangeNoteColor} />
        case "note-video":
            return <NoteVideo note={note} onDeleteNote={onDeleteNote} noteColor={noteColor} onChangeNoteColor={onChangeNoteColor}/>
           

            default:
               return <React.Fragment></React.Fragment>
            }
        }