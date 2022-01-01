import { TodoPreview } from "../TodoPreview.jsx"

export class NoteTodos extends React.Component {

    state = {

    }

    // componentDidMount() {

    // }



    render() {
        const { note, noteColor } = this.props
        const { todos } = note.info
        return (
            <article className="card-note" style={{ backgroundColor: noteColor }} >
                <h2 contenteditable="true">{note.info.label}</h2>
                {todos.map(todo => <TodoPreview todo={todo} />)}

                
            </article>
        )

    }
}


