import { DynamicNote } from './Dynamic-cmps/DynamicNote.jsx'
import { NoteActionBar } from './NoteActionBar.jsx'
import { noteService } from '../services/note.service.js'
// import { ColorInput } from './ColorInput.jsx'
export class NotePreview extends React.Component {
    state = {
        noteColor: '',
    }

    componentDidMount() {
        // console.log('note',this.props.note.style.backgroundColor)
        this.setState({noteColor:this.props.note.style.backgroundColor})
    }
    

    onChangeNoteColor = (ev) => {
        this.setState({ noteColor: ev.target.value })
        // console.log(this.state)
        noteService.changeNoteColor(this.props.note.id, this.state.noteColor)
    }

    render() {
        const { noteColor } = this.state
        const { onDeleteNote, note } = this.props
        
        return (
            <section
                className="note-preview">
                <DynamicNote 
                    onDeleteNote={onDeleteNote}
                    note={note}
                    noteColor={noteColor}
                    
                />
                <NoteActionBar 
                onDeleteNote={onDeleteNote}
                note={note}
                onChangeNoteColor={this.onChangeNoteColor}
                />
                
                {/* <button onClick={() => this.props.onDeleteNote(note.id)}>Delete Note</button>
                <ColorInput note={note} onChangeNoteColor={this.onChangeNoteColor} /> */}
            </section>
        )
    }
}

