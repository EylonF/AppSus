import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/NoteList.jsx'
import { NotePreview } from '../cmps/NotePreview.jsx'

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
            console.log('notes:', notes);
            this.setState({notes})
        })

    }

    render() {
        const {notes} = this.state
        return (
            <section className="note-app main-layout">
          <NoteList notes={notes}/>
            </section>
        )
    }

    
}