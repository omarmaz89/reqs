const fs = require('fs');

const firstNames = ["John", "Sara", "Ali", "Mona", "Omar", "Laila", "Ahmed", "Fatima", "Hassan", "Yara"];
const lastNames = ["Smith", "Ahmed", "Hassan", "Khaled", "Youssef", "Ali", "Ibrahim", "Mostafa", "Hussein", "Karim"];
const streets = ["Main St", "Elm St", "Oak Rd", "Palm St", "Pine St", "Maple Ave", "Cedar Rd", "Sunset Blvd", "Lakeview Dr", "Hilltop Rd"];
const descriptions = [
    "Install new window in living room",
    "Measure kitchen for new cabinets",
    "Replace broken door in bedroom",
    "Fix window lock in bathroom",
    "Measure and install sliding door",
    "Repair broken door handle",
    "Replace window glass",
    "Measure balcony for new railings",
    "Install door frame",
    "Measure for wardrobe installation",
    "Fix window shutters",
    "Replace broken window latch",
    "Install french doors",
    "Measure living room for curtain rods",
    "Repair door hinges",
];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomPhoneNumber() {
    const thirdDigit = ["0","1","2","5"][Math.floor(Math.random() * 4)];
    let rest = "";
    for(let i = 0; i < 8; i++) {
        rest += Math.floor(Math.random() * 10);
    }
    return `01${thirdDigit}${rest}`;
}

const rows = ["name,phoneNumber,address,des,status"];

for (let i = 0; i < 100; i++) {
    const name = `${randomItem(firstNames)} ${randomItem(lastNames)}`;
    const phone = randomPhoneNumber();
    const address = `${Math.floor(Math.random() * 200) + 1} ${randomItem(streets)}`;
    const des = randomItem(descriptions);
    const status = "pending";
    rows.push(`${name},${phone},${address},${des},${status}`);
}

fs.writeFileSync('requests_sample.csv', rows.join('\n'));
console.log("CSV file 'requests_sample.csv' created with 100 sample rows!");
