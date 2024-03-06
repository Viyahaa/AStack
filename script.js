// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile navigation
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');

navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Form submission handling (replace the form ID with your actual form ID)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // You can add your form submission logic here, e.g., sending form data to a server using AJAX
    // For example: 
    // const formData = new FormData(this);
    // fetch('your-server-endpoint', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Form submission successful:', data);
    //     // You can display a success message or redirect the user to a thank you page here
    // })
    // .catch(error => {
    //     console.error('Error submitting form:', error);
    //     // You can display an error message to the user here
    // });
});

// You can add more JavaScript functionality as needed for your specific requirements.
