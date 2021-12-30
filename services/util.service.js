export const utilService = {
    getFormattedTime,
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