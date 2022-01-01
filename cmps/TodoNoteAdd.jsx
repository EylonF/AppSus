import { noteService } from '../services/note.service.js'

export class TodoNoteAdd extends React.Component {

    state = {
        note: {
            id: noteService.getNoteId(),
            type: "note-todos",
            info: {
                label: "",
                todo: ''
            },
            style: {
                backgroundColor: "#BAABDA"
            },
        },
    }

    handleChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ note: { ...prevState.note, info: { [field]: value } } }))
        console.log('label',this.state.note.info.label)
        console.log('todo',this.state.note.info.todo)
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        // const label = this.state.note.info.label
        // noteService.addNewNote(this.state.note).then(this.setState({
        //     note: {
        //         id: noteService.getNoteId(),
        //         type: "note-todos",
        //         info: {
        //             label: label,
        //             todo: ''
        //         }
        //     }
        // }))
        // this.props.onAddNote()

    };

    render() {
        const { label,todo } = this.state.note.info;
        return (
            <div>
                <form onSubmit={this.onSubmit} action=''>
                    <label htmlFor="note-todo-label-add"></label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-list-label-add"
                        name="label"
                        value={label}
                        placeholder="Title"

                    />
                    <label htmlFor="note-todo-list-add"></label>
                    <input
                        type='text'
                        onChange={this.handleChange}
                        id='note-todo-list-add'
                        name='todo'
                        value={todo}
                        placeholder="What Todo..."
                    />

                    <button className="add-btn">Add Todo</button>
                </form>
            </div>
        )
    }
}

