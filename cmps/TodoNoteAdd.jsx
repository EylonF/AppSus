
export class TodoNoteAdd extends React.Component {

    state = {
        note:    {
            id: "n103",
            type: "note-todos",
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ]
            }
        },
    }

    handleChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState((prevState) => ({
            todo: { ...prevState.todo, [field]: value },
        }));
    };


    onSubmit = (ev) => {
        ev.preventDefault();
        const { todo, type } = this.state;
        this.props.onAddNote(todo, type)
        this.setState({ list: '', lable:'' });

    };

    render() {
        const { list, lable } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} action=''>
                    <label htmlFor="note-todo-label-add">Lable :</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-list-label-add"
                        name="lable"
                        value={lable}

                    />
                    <label htmlFor="note-todo-list-add">Enter list :</label>
                    <input
                        type='text'
                        onChange={this.handleChange}
                        id='note-todo-list-add'
                        name='list'
                        value={list}
                    />

                    <button className="add-btn">Add List</button>
                </form>
            </div>
        )
    }
}

