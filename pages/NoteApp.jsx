import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/NoteList.jsx'
import { NotePreview } from '../cmps/NotePreview.jsx'
import { AddNote } from '../cmps/AddNote.jsx'

export class NoteApp extends React.Component {

    state = {
        notes: []
       
    }

    componentDidMount() {
        this.loadNotes()
        console.log('NoteApp did mount')
    }

    loadNotes = () => {
        noteService.query().then(notes => {
            // console.log('notes:', notes);
            this.setState({notes})
        })
    }

    onAddNote = () => {
			this.loadNotes();	
	}

	onDeleteNote = (noteId) => {
		noteService.deleteNote(noteId).then(() => {
			this.loadNotes()
		})
	}

    render() {
        const {notes} = this.state
        return (
            <section className="note-app main-layout">
                <AddNote
					loadNotes={this.loadNotes}
					handleChange={this.handleChange}
					onAddNote={this.onAddNote}
					notes={notes} />
				<NoteList
					loadNotes={this.loadNotes}
					onDeleteNote={this.onDeleteNote}
					notes={notes} />
            </section>
        )
    }

    
}