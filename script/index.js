// Array of numbers
const numbsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to get the next number and display it
function getNextNumber() {
    const get = parseInt(Math.random() * numbsArray.length);
    const nextNumber = numbsArray[get];
    document.getElementById('number').textContent = `Next Number: ${nextNumber}`;
}

// Event listener for the button
document.getElementById('Button').addEventListener('click', getNextNumber);