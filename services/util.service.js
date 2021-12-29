export const utilService = {
    getFormattedTime,
}

function getFormattedTime(timestamp) {
    const date = Date.parse(timestamp);
    const month = date.getMonth();
    const day = date.getDay();

    const formattedTime = `${month} ${day}` 
    return Promise.resolve(formattedTime)

}