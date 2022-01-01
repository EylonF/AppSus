// import { NoteActionBar } from "../NoteActionBar.jsx"

export function NoteTodos({note, onDeleteNote, noteColor}) {
    
    // const todoTxt = info.todos.map(todo => todo.txt)
  


    return (
        <article className="card-note" style={{ backgroundColor: noteColor }} >
            <h2 contenteditable="true">{note.info.label}</h2>
            <ul>
                {note.info.todos.map(todo => <li contenteditable="true">{note.todo.txt}</li>)}
            </ul>
            {/* <NoteActionBar note={note} onDeleteNote={onDeleteNote}/> */}
        </article>
    )
}