import {noteService} from '../services/note.service.js'

export class TodoNoteAdd extends React.Component {

    state = {
        note:    {
            id: noteService.getNoteId(),
            type: "note-todos",
            info: {
                label: "",
                todos: [
                    { txt: "", doneAt: null },
                    { txt: "", doneAt: null }
                ]
            }
        },
    }

    handleChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;

        this.setState((prevState) => ({ note:{...prevState.note,info:{ ...prevState.note.info, }} ,
        }))

        // if(field==='label') {

        //     this.setState((prevState) => ({
        //         note: { ...prevState.note, info: {[field]:value} },
                
        //     }));
        // } else {
        //     this.setState((prevState) => ({
        //         note: { ...prevState.note, info: {[field]:[0].txt:value} },
                
        //     }));
        // }
        // };
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        noteService.addNewNote(this.state.note).then(this.setState({
            note:    {
                id: noteService.getNoteId(),
                type: "note-todos",
                info: {
                    label: "",
                    todos: [
                        { txt: "", doneAt: null },
                        { txt: "", doneAt: null }
                    ]
                }
            }
        }))
        this.props.onAddNote()

    };

    render() {
        const { label } = this.state.note.info;
        const { txt } = this.state.note.info.todos;
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
                        name='list'
                        value={txt}
                        placeholder="What Todo..."
                    />

                    <button className="add-btn">Add List</button>
                </form>
            </div>
        )
    }
}

