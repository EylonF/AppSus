import { DynamicTodoAdd } from './DynamicTodoAdd.jsx'


export class AddNote extends React.Component {

    state = {
        type: 'text'
    }

    handleChange = (ev) => {
        const value = ev.target.value;
        this.setState((prevState) => ({ ...prevState, type: value }))
    }

    render() {
        const {loadNotes, onAddNote, handleChange} = this.props
        const { type } = this.state
        return (
            <div className="note-add-main">
                <button className="btn-home1" value="text" onClick={this.handleChange}>Note</button>
                <button className="btn-home2" value="img" onClick={this.handleChange}>Image</button>
                <button className="btn-home1" value="todos" onClick={this.handleChange}>Todos</button>
                <button className="btn-home2" value="video" onClick={this.handleChange}>Video</button>
                <DynamicTodoAdd 
                loadNotes={loadNotes} 
                onAddNote={onAddNote}
                handleChange={handleChange}
                type={type} />
            </div>)
    }
}