// Wait for the entire HTML document to load
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    
    // 1. Find the elements we need
    const navToggle = document.querySelector('.nav-toggle'); // The hamburger button
    const navLinks = document.querySelector('.nav-links');   // The <ul> of links
    const body = document.querySelector('body');           // The <body> tag

    // 2. Add a 'click' event listener to the hamburger button
    navToggle.addEventListener('click', () => {
        
        // 3. When clicked, toggle the 'nav-open' class on all three elements
        //    - On 'navLinks', this slides it in (see CSS)
        //    - On 'navToggle' (body), this animates the hamburger (see CSS)
        navLinks.classList.toggle('nav-open');
        navToggle.classList.toggle('nav-open');
        body.classList.toggle('nav-open'); // Optional: can be used to stop body scrolling
    });
    
    // --- (We will add form validation code here later) ---
    // ... (Your mobile navigation code from before should be here) ...

    // --- Contact Form Validation ---
    
    // 1. Find the form and other elements
    const contactForm = document.querySelector('#contact-form');
    
    // Only run this code if the contact form exists on the current page
    if (contactForm) {
        const formStatus = document.querySelector('#form-status');
        const submitButton = document.querySelector('#submit-button');

        // Form inputs
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');

        // Error message divs
        const nameError = document.querySelector('#name-error');
        const emailError = document.querySelector('#email-error');
        const messageError = document.querySelector('#message-error');

        // 2. A simple email validation function
        function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        // 3. The main validation function
        function validateForm() {
            let isValid = true;
            
            // Clear previous errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            formStatus.textContent = '';
            formStatus.className = '';

            // Check Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Please enter your name.';
                isValid = false;
            }

            // Check Email
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Please enter your email.';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Check Message
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Please enter a message.';
                isValid = false;
            }

            return isValid;
        }

        // 4. Add a 'submit' event listener to the form
        contactForm.addEventListener('submit', (event) => {
            // Stop the form from submitting the traditional way
            event.preventDefault();

            if (validateForm()) {
                // If validation passes:
                
                // Disable button and show loading text
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';

                // --- SIMULATION ---
                // In a real app, you would send data to a backend here.
                // We will simulate a 2-second delay.
                setTimeout(() => {
                    // Show success message
                    formStatus.textContent = 'Thank you! Your message has been sent successfully.';
                    formStatus.className = 'status-success';
                    
                    // Reset the form
                    contactForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';

                }, 2000); // 2000 milliseconds = 2 seconds

            } else {
                // If validation fails:
                formStatus.textContent = 'Please correct the errors in the form.';
                formStatus.className = 'status-error';
            }
        });
    }

}); // <-- This closing tag )}; should be the VERY end of your script.js file
