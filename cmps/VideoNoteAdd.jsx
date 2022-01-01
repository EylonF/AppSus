import {noteService} from '../services/note.service.js'

export class VideoNoteAdd extends React.Component {

    state = {
        note:  {
            id: noteService.getNoteId(),
            type: "note-video",
            info: {
                url: "",
                title: "",
            },
            style: {
                backgroundColor: "#D77FA1"
            },
        }
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;

        this.setState((prevState) => ({ note:{...prevState.note,info:{ ...prevState.note.info, [field]:value }} ,
        }));
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        noteService.addNewNote(this.state.note).then(this.setState({
            note:    {
                id: noteService.getNoteId(),
                type: "note-video",
                info: {
                    url: "",
                    title: "",
                },
            }
        }))
        this.props.onAddNote()


    };


    render() {
        const { title } = this.state.note.info;
        const { url } = this.state.note.info;
        
        return (
            <div>
                <form onSubmit={this.onSubmit} action=''>
                    <label htmlFor="note-video-add"></label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-video-add"
                        name="url"
                        value={url}
                        placeholder="Video Link"
                    />
                    <label htmlFor="note-img-title"></label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        id="note-video-title"
                        name="title"
                        value={title}
                        placeholder="Title"
                    />
                    <button className="add-btn">Add Video</button>
                </form>
            </div>
        )
    }
}

