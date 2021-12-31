import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteTodos({note, onDeleteNote}) {
    
    // const todoTxt = info.todos.map(todo => todo.txt)
  


    return (
        <article className="card-note card text-dark bg-warning mb-3">
            <h2 contenteditable="true">{note.info.label}</h2>
            <ul>
                {note.info.todos.map(todo => <li contenteditable="true">{note.todo.txt}</li>)}
            </ul>
            <NoteActionBar note={note} onDeleteNote={onDeleteNote}/>
        </article>
    )
}