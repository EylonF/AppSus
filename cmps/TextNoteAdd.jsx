import {noteService} from '../services/note.service.js'

export class TextNoteAdd extends React.Component {

    state = {
        // input: '',
        // type: 'note-txt',
      note:  {
            id: noteService.getNoteId(),
            type: "note-txt",
            isPinned: false,
            info: {
                txt: ""
            }
        },
    }

    // handleChange = ({ target }) => {
    //     const value = target.type === 'number' ? +target.value : target.value;
    //     this.setState((prevState) => ({ ...prevState, input: value }));
    //     console.log('this.state.input:', this.state.input);    
    // };
    handleChange = ({ target }) => {
        // const field = target.name
        const value = target.value
        this.setState((prevState) => ({ note: { ...prevState.note, info:{txt:value} } }))
        console.log(this.state.note.info.txt)
    };


    onSubmitNote = (ev) => {
        ev.preventDefault();
        // const { input, type } = this.state;
        // console.log(input, type)
        // this.props.onAddNote(input, type)
        noteService.addNote(this.state.note)
        this.setState({ input: '' });
    };

    render() {
        const { input } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmitNote} action=''>
                    <label htmlFor='add-text-note'>Add note :</label>
                    <input
                        type='text'
                        onChange={this.handleChange}
                        id='add-text-note'
                        name='input'
                        value={input}
                    />
                    <button className="add-btn">Add Text-Note</button>
                </form>
            </div>
        )
    }
}