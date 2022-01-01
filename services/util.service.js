export const utilService = {
    getFormattedTime,
    getFormatedSubject
}

function getFormattedTime(timestamp) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(timestamp);
    // console.log(date)
    const month = date.getMonth();
    const day = date.getDate();

    const formattedTime = `${monthNames[month]} ${day}`
    return formattedTime

}

function getFormatedSubject(text) {
    console.log(text.length)
    if (text == null) {
        return "";
    }
    if (text.length <= 20) {
        return text;
    }
    text = text.substring(0, 20);
    const last = text.lastIndexOf(" ");
    text = text.substring(0, last);
    return text + "...";
}