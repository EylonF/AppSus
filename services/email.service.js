import { storageService } from './storage.service.js'

export const emailService = {
    query,
}

const STORAGE_KEY = 'emailDB'

const gEmails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        id: 'e102',
        subject: 'hate you!',
        body: 'Fuck off!',
        isRead: true,
        sentAt: 1551133980000,
        to: 'koko@koko.com'
    },
]

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

_createEmails()

function query(filterBy=null) {
    // console.log('filter by in book seervice',filterBy)
    const emails = _loadEmailsFromStorage()
    if (!filterBy) return Promise.resolve(emails)
// const filteredEmails = _getFilteredBooks(emails,filterBy)
// return Promise.resolve(filteredEmails)
}

function _createEmails(){
    let emails = _loadEmailsFromStorage()
    if (!emails || !emails.length) {
        emails = gEmails
    }
    _saveEmailsToStorage(emails)
}

function _saveEmailsToStorage(emails) {
    storageService.saveToStorage(STORAGE_KEY, emails)
}

function _loadEmailsFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}