import {noteService} from '../services/note.service.js'

export class ImgNoteAdd extends React.Component {

    state = {
        note:  {
            id: noteService.getNoteId(),
            type: "note-img",
            info: {
                url: "",
                title: ""
            },
            style: {
                backgroundColor: "#D6E5FA"
            },
        }
    }

     handleChange = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;
        
        this.setState((prevState) => ({ note:{...prevState.note,info:{ ...prevState.note.info, [field]:value }} ,
        }));

    };
    // info:{[field]:value}

    onSubmit = (ev) => {
        ev.preventDefault();      
        noteService.addNewNote(this.state.note).then(this.setState({
            note:  {
                id: noteService.getNoteId(),
                type: "note-img",
                info: {
                    url: "",
                    title: ""
                },
                style: {
                    backgroundColor: ""
                }
            }
        }))
        this.props.onAddNote()

    };


    render() {
        const { url } = this.state.note.info;
        const { title } = this.state.note.info;
        return (
            <div>
                <form onSubmit={this.onSubmit} action=''>
                    <label htmlFor="note-img-add"></label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-img-add"
                        name="url"
                        value={url}
                        placeholder="Imag Link"
                    />
                    <label htmlFor="note-img-title"></label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-img-title"
                        name="title"
                        value={title}
                        placeholder="Title"
                    />
                    <button className="add-btn">Add Image</button>
                </form>
            </div>
        )
    }
}
