import {noteService} from '../services/note.service.js'

export class TextNoteAdd extends React.Component {

    state = {
      note:  {
            id: noteService.getNoteId(),
            type: "note-txt",
            isPinned: false,
            info: {
                txt: ""
            }
        },
    }

    
    handleChange = ({ target }) => {      
        const value = target.value
        this.setState((prevState) => ({ note: { ...prevState.note, info:{txt:value} } }))
    };


    onSubmitNote = (ev) => {
        ev.preventDefault();
        noteService.addNewNote(this.state.note).then(this.setState({
            note:  {
                id: noteService.getNoteId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: ""
                }
            }
        }))
        this.props.onAddNote()
    };

    render() {
        const { txt } = this.state.note.info;
        return (
            <div>
                <form onSubmit={this.onSubmitNote} action=''>
                    <label htmlFor='add-text-note'>Enter Note :</label>
                    <input
                        type='text'
                        onChange={this.handleChange}
                        id='add-text-note'
                        name='input'
                        value={txt}
                    />
                    <button className="add-btn">Add Note</button>
                </form>
            </div>
        )
    }
}