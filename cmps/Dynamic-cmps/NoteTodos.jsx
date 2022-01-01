import { TodoPreview } from "../TodoPreview.jsx"
import { NoteActionBar } from "../NoteActionBar.jsx"

export class NoteTodos extends React.Component {

    state = {
        todos: [this.props.note.info.todos]
    }

    componentDidMount() {
        // console.log('state in cdm note todos: ', this.state.todos)
        const { todos } = this.props.note.info
        const noteTodos = todos.map((todo,idx) => {
           todo.id = idx
            return todo
        });
        // console.log('noteTodos',noteTodos)
        this.setState({todos:noteTodos})
        // console.log('state in cdm note todos: ', this.state.todos)
    }

    onAddTodo = (ev) => {
        ev.preventDefault()

    }




    render() {
        const { note, noteColor, onChangeNoteColor, onDeleteNote} = this.props
        const { todos } = this.state
        return (
            <article className="card-note" style={{ backgroundColor: noteColor }} >
                <h2 contenteditable="true">{note.info.label}</h2>
                {todos.map(todo => <TodoPreview todo={todo} />)}
                {/* <button className="btn btn-primary"><i class="bi bi-clipboard-plus"></i></button> */}
                <NoteActionBar 
                onDeleteNote={onDeleteNote}
                note={note}
                onChangeNoteColor={onChangeNoteColor}
                />
                

            </article>
        )

    }
}


