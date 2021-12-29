import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/NoteList.jsx'

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
            <section className="note-app">
          <h1>Note App</h1>
          <NoteList notes={notes}/>
            </section>
        )
    }

    
}