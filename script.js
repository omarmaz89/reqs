const emailInput = document.getElementById('email-input');
const submitBtn = document.querySelector('.submit-btn');

const emailError = document.getElementById('email-error');

submitBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    // Reset error messages
    emailError.style.display = 'none';

    // Email validation
    if (!email) {
        emailError.textContent = "Email is required.";
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = 'block';
        isValid = false;
    }


    if (isValid) {
        console.log("Form submitted successfully!");
        // Here you can add actual form submission logic
    }
});
