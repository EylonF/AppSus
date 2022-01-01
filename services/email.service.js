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
    {
        id: 'e105',
        subject: 'ערב חשיפה לבמאים.ות ומנהלי תיאטראות >> בסדנאות הבמה ',
        body: 'פרויקט חשיפה  הוא מיזם שנועד לתת הזדמנות הדדית לשחקנים ובמאים להכיר זה את זה באוירה מקצועית, ידידותית ומאפשרת. מיועד לשחקנים מקצועיים (רב גילאי) שרוצים להתחדש, להתעדכן ולפגוש מנהלים ובמאי תאטרון עכשוויים.',
        isRead: true,
        isStared: false,
        sentAt: 1640851160009,
        to: 'user@appsus.com',
        from: 'hasbara@shaham.org.il'

    },
    {
        id: 'e106',
        subject: 'www.ybook.co.il |אישור רכישה מהאתר',
        body: 'פרטי הרכישה איך לשנות את דעתך / מייקל פולן',
        isRead: true,
        isStared: true,
        sentAt: 1640851160009,
        to: 'user@appsus.com',
        from: 'nfo@ybook.co.il'

    },
    {
        id: 'e107',
        subject: 'Discover a new Island in Chapter 3 Season 1: Flipped',
        body: 'Witness the wintry new Island thaw, discover new locations, win Victory Crowns, complete new Quests, plus more',
        isRead: false,
        isStared: false,
        sentAt: 1640851160009,
        to: 'user@appsus.com',
        from: 'fortnite@mail.epicgames.com'

    },
    {
        id: 'e108',
        subject: ' תקנון הגשת מועמדות לפרסי אקו"ם 2021/22',
        body: 'חברות וחברים יקרים, לאחר כשנתיים בהן לא התקיימה תחרות פרסי אקו"ם, אני שמחים להכריז על תחרות פרסי אקו"ם לשנת 2021/22 ! להלן מספר דגשים, המופיעים בתקנון הפרסים המצורף כאן . אנא קראו בעיון את תקנון הפרסים לפני הגשת המועמדות.',
        isRead: true,
        isStared: true,
        sentAt: 1640851160009,
        to: 'user@appsus.com',
        from: 'members@acum.org.il'

    },
    {
        id: 'e109',
        subject: ' פרסומת | הספר יאיוי קוסמה במבצע לחברי מועדון ומצטרפים חדשים!',
        body: 'זוהי פנייה בדיוור ישיר, בהתאם למאגר מידע רשום בבעלות סטימצקי (2005)',
        isRead: false,
        isStared: false,
        sentAt: 1640851160009,
        to: 'user@appsus.com',
        from: 'Mailing@Steimatzky.co.il'

    },
    {
        id: 'e110',
        subject: ' עדכונים בתנאים ובהגבלות של YouTube ',
        body: 'ב-5 בינואר 2022 נעדכן את התנאים וההגבלות שלנו (להלן "התנאים") לצורך הבהרה וכדי לעזור לך להבין למה לצפות בזמן השימוש בשירות. השינויים לא ישפיעו על אופן השימוש ב-YouTube. ניתן לעיין בסיכום השינויים ובתנאים המעודכנים כאן.',
        isRead: true,
        isStared: true,
        sentAt: 1640851160009,
        to: 'user@appsus.com',
        from: 'no-reply@youtube.com'

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