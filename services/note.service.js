import { storageService } from './storage.service.js'

export const noteService = {
    query,
    getNoteId,
    addNote,
}

const STORAGE_KEY = 'noteDB'

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://www.picshare.co.il/m_pictures/img71865.jpg",
            title: "my first basket"
        },
        style: {
            backgroundColor: "#00d"
        }
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
        }
    },
    {
        id: "n104",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/embed/GiJki1YyptE",
            title: "👑בריייייי ה"
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

function getNoteId(){
    const notes = _loadNotesFromStorage()
return `e10${notes.length+1}`
}

function addNote(note){
    let notes = _loadNotesFromStorage()
notes.unshift(note)
_saveNotesToStorage(notes)
}
