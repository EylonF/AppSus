import { noteService } from '../services/email.service.js'

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
        return (
            <section className="note-app">
          <h1>Note App</h1>
            </section>
        )
    }

    
}