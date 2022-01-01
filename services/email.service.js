import { storageService } from './storage.service.js'

export const emailService = {
    query,
    getEmailId,
    addEmail,
    deleteEmail,
}

const STORAGE_KEY = 'emailDB'

let gEmails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        isStared: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        from: 'Mahatma Appsus'
    },
    {
        id: 'e102',
        subject: 'hate you!',
        body: 'Fuck off!',
        isRead: true,
        isStared: true,
        sentAt: 1640851160009,
        to: 'koko@koko.com',
        from: 'Mahatma Appsus'

    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        isStared: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        from: 'momo momo'
    },
    {
        id: 'e104',
        subject: 'hate you!',
        body: 'Fuck off!',
        isRead: true,
        isStared: true,
        sentAt: 1640851160009,
        to: 'user@appsus.com',
        from: 'koko koko'

    },
]

const gLoggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

_createEmails()

function query(filterBy=null) {
    const emails = _loadEmailsFromStorage()
    if (!filterBy) return Promise.resolve(emails)
    const filteredEmails = _getFilteredEmails(emails,filterBy)
    return Promise.resolve(filteredEmails)
}

function _createEmails(){
    let emails = _loadEmailsFromStorage()
    if (!emails || !emails.length) {
        emails = gEmails
    } 
    _saveEmailsToStorage(emails)
}

function _getFilteredEmails(emails,filterBy) {
    let { status, txt, isRead,isStared } = filterBy
    console.log('status, txt, isRead,isStared',status, txt, isRead,isStared)
    
    return emails.filter(email=>{
        email = _checkEmailStatus(email)
        // console.log(email)
        if (isStared) return email.isStared === true && email.status === status
        else return email.status === status
    })
}


function _checkEmailStatus(email){
if (email.to === gLoggedinUser.email) email.status = 'inbox'
else email.status = 'sent'
return email
}

function _saveEmailsToStorage(emails) {
    storageService.saveToStorage(STORAGE_KEY, emails)
}

function _loadEmailsFromStorage() {
    return storageService.loadFromStorage(STORAGE_KEY)
}

function getEmailId(){
    const emails = _loadEmailsFromStorage()
return `e10${emails.length+1}`
}

function addEmail(email){
    console.log('email',email)
    if (email.subject === '' || email.to === '' ){
        
        return Promise.reject()
        
    }else{
        let emails = _loadEmailsFromStorage()
        emails.unshift(email)
        _saveEmailsToStorage(emails)
        return Promise.resolve()
    } 
 
}

function deleteEmail(emailId) {
    let emails = _loadEmailsFromStorage()
    emails = emails.filter((email) => email.id !== emailId);
    _saveEmailsToStorage(emails)
    return Promise.resolve();
}