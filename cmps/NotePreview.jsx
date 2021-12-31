import { DynamicNote } from './Dynamic-cmps/DynamicNote.jsx'
import { NoteActionBar } from './NoteActionBar.jsx'
// import { ColorInput } from './ColorInput.jsx'
export class NotePreview extends React.Component {
    state = {
        noteColor: '',
    }

    onChangeNoteColor = (ev) => {
        this.setState({ noteColor: ev.target.value })
        console.log(this.state)
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

