document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = this;
    fetch("/", {
        method: "POST",
        body: new FormData(form),
        headers: {
            "Accept": "application/x-www-form-urlencoded;charset=UTF-8",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    })
    .then(() => {
        form.innerHTML = '<p>Thank you for your message!</p>'; // Replace form with thank-you message
    })
    .catch((error) => {
        form.innerHTML = '<p>Error submitting the form.</p>';
        console.error('Error:', error);
    });
});
