// Get the current date
const currentDate = new Date();

// Calculate 61 days from the current date
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 61);

// Format the result (optional)
const formattedFutureDate = `${futureDate.getFullYear()}-${(futureDate.getMonth() + 1).toString().padStart(2, '0')}-${futureDate.getDate().toString().padStart(2, '0')}`;

// console.log("Present Date:", currentDate.toISOString().split('T')[0]);
// console.log("Future Date (61 days later):", formattedFutureDate);


document.getElementById('futureDate').textContent = `${formattedFutureDate}`;