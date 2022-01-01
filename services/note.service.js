import { storageService } from './storage.service.js'

export const noteService = {
    query,
    getNoteId,
    addNewNote,
    deleteNote,
    changeNoteColor,
}

const STORAGE_KEY = 'noteDB'

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "remember to remember"
        },
        style: {
            backgroundColor: "#FF4848"
        },
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://www.picshare.co.il/m_pictures/img71865.jpg",
            title: "my basket"
        },
        style: {
            backgroundColor: "#D6E5FA"
        },
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#BAABDA"
        },
    },
    {
        id: "n104",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/embed/GiJki1YyptE",
            title: "👑בריייייי ה"
        },
        style: {
            backgroundColor: "#C6D57E"
        },
    },
    {
        id: "n105",
        type: "note-img",
        info: {
            url: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/poolside-glamour-slim-aarons.jpg",
            title: "pool party bitches"
        },
        style: {
            backgroundColor: "#FFD371"
        },
    },
    {
        id: "n106",
        type: "note-img",
        info: {
            url: "https://media-exp1.licdn.com/dms/image/C4D03AQF_dzAW9tEmVg/profile-displayphoto-shrink_800_800/0/1592643510622?e=1646265600&v=beta&t=zHeZrirw_r_PgVecoB3T_wZcIv7M4Jm5ZFQHMuy0rPg",
            title: "my BFF 💘"
        },
        style: {
            backgroundColor: "#DB6B97"
        },
    },
    {
        id: "n107",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/embed/nVmyRmvQo9s",
            title: "For Dark Days"
        },
        style: {
            backgroundColor: "#A3423C"
        },
    },
    {
        id: "n108",
        type: "note-img",
        info: {
            url: "https://i.ibb.co/28FbTHt/sleep.jpg" ,
            title: "😂🤣😂"
        },
        style: {
            backgroundColor: "#261C2C"
        },
    },
    {
        id: "n109",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/embed/BGbNizFVz-I",
            title: "edge of guedj"
        },
        style: {
            backgroundColor: "#6E85B2"
        },
    },
    {
        id: "n110",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "its all about the 💰"
        },
        style: {
            backgroundColor: "#F0D290"
        },
    },
    {
        id: "n111",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "לחשוב על סטארטאפ"
        },
        style: {
            backgroundColor: "#95DAC1"
        },
    },
    {
        id: "n112",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "לחשוב על עוד סטארטאפ"
        },
        style: {
            backgroundColor: "#FD6F96"
        },
    },
];


_createNotes()

function query(filterBy = null) {
    const notes = _loadNotesFromStorage()
    if (!filterBy) return Promise.resolve(notes)
}

function _createNotes() {
    let notes = _loadNotesFromStorage()
    if (!notes || !notes.length) {
        notes = gNotes
    }
    _saveNotesToStorage(notes)
}


function _saveNotesToStorage(notes) {
    storageService.saveToStorage(STORAGE_KEY, notes)
}

function _loadNotesFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}

function getNoteId() {
    const notes = _loadNotesFromStorage()
    return `e10${notes.length + 1}`
}


function addNewNote(note) {
    let notes = _loadNotesFromStorage();
    // let newNote = _createNotes(input, type);
    notes.unshift(note);
    _saveNotesToStorage(notes);
    return Promise.resolve();
}


function deleteNote(noteId) {
    let notes = _loadNotesFromStorage();
    notes = notes.filter((note) => note.id !== noteId);
    _saveNotesToStorage(notes);
    return Promise.resolve();
}

function changeNoteColor(noteId, noteColor) {
    let notes = _loadNotesFromStorage();
    notes = notes.map((note) => {
        if (note.id === noteId) note.style.backgroundColor = noteColor
        return note
    });
    _saveNotesToStorage(notes);
    return Promise.resolve();

}