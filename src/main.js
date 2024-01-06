// // Get the current date
// const currentDate = new Date();

// // Calculate 61 days from the current date
// const futureDate = new Date(currentDate);
// futureDate.setDate(currentDate.getDate() + 61);

// // Format the result (optional)
// const formattedFutureDate = `${futureDate.getFullYear()}-${(futureDate.getMonth() + 1).toString().padStart(2, '0')}-${futureDate.getDate().toString().padStart(2, '0')}`;

// console.log("Present Date:", currentDate.toISOString().split('T')[0]);
// console.log("Future Date (61 days later):", formattedFutureDate);


// document.getElementById('futureDate').textContent = `${formattedFutureDate}`;

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