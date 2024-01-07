
// Function to get the last two Wednesdays from a future date
function getLastTwoWednesdaysFromFuture(futureDate) {
    const currentDayOfWeek = futureDate.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
    const daysToWednesday = (currentDayOfWeek + 7 - 3) % 7; // Calculate days to Wednesday
    const lastWednesday = new Date(futureDate);
    lastWednesday.setDate(futureDate.getDate() - daysToWednesday);
    const secondLastWednesday = new Date(lastWednesday);
    secondLastWednesday.setDate(lastWednesday.getDate() - 7);

    return [lastWednesday, secondLastWednesday];
}

// Format the result as "Month day, year"
function formatDateString(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `${month} ${dayOfMonth}, ${year}`;
}

// Set a future date (e.g., 61 days from the present date)
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 61);

// Get the last two Wednesdays from the future date
const [lastWednesday, secondLastWednesday] = getLastTwoWednesdaysFromFuture(futureDate);

// Format the dates
const formattedLastWednesday = formatDateString(lastWednesday);
const formattedSecondLastWednesday = formatDateString(secondLastWednesday);

// Update the HTML element with the calculated last Wednesdays from the future date
document.getElementById('lastWednesdaysFromFutureDisplay').textContent = `${formattedLastWednesday}, ${formattedSecondLastWednesday}`;

const approvedScDates = [
    "01/03/24",
    "01/10/24",
    "02/07/24",
    "02/14/24",
    "03/06/24",
    "03/13/24",
    "04/03/24",
    "04/10/24",
    "05/01/24",
    "05/08/24",
    "06/05/24",
    "06/12/24",
    "07/03/24",
    "07/10/24",
    "08/07/24",
    "08/14/24",
    "09/04/24",
    "09/11/24",
    "10/02/24",
    "10/09/24",
    "11/06/24",
    "11/13/24",
    "12/04/24",
    "12/11/24"
];
const ulElement = document.getElementById('approvedScDatesList');
for (const date of approvedScDates) {
    const liElement = document.createElement('li');
    liElement.textContent = date;

    ulElement.appendChild(liElement);
}


const approvedArDates = [
    "01/17/24",
    "01/24/24",
    "02/21/24",
    "02/28/24",
    "03/20/24",
    "04/17/24",
    "04/24/24",
    "05/15/24",
    "05/22/24",
    "06/26/24",
    "07/17/24",
    "07/24/24",
    "08/21/24",
    "08/28/24",
    "09/18/24",
    "09/25/24",
    "10/16/24",
    "10/23/24",
    "11/20/24",
    "11/27/24",
    "12/18/24"
];

const ulElementTwo = document.getElementById('approvedArDatesList');
for (const date of approvedArDates) {
    const liElement = document.createElement('li');
    liElement.textContent = date;

    ulElementTwo.appendChild(liElement);
}

