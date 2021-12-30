

export function NoteTodos(note) {
    const { info, isPinned, id, } = note.note
    const todoTxt = info.todos.map(todo => todo.txt)


    return (
        <article className="card-note card text-dark bg-warning mb-3">
            <h2 contenteditable="true">{info.label}</h2>
            <ul>
                {info.todos.map(todo => <li contenteditable="true">{todo.txt}</li>)}
            </ul>


        </article>
    )
}