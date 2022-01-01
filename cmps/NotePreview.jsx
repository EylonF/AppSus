import { DynamicNote } from './Dynamic-cmps/DynamicNote.jsx'
import { noteService } from '../services/note.service.js'
export class NotePreview extends React.Component {
    state = {
        noteColor: '',
    }

    componentDidMount() {
        this.setState({noteColor:this.props.note.style.backgroundColor})
    }
    

    onChangeNoteColor = (ev) => {
        this.setState({ noteColor: ev.target.value })
        noteService.changeNoteColor(this.props.note.id, this.state.noteColor).then(this.props.loadNotes())
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
                    onChangeNoteColor={this.onChangeNoteColor}
                    
                />
        
            </section>
        )
    }
}

