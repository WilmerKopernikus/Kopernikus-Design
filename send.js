<script>
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    var form = this;
    var data = new FormData(form);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
        })
        .then(response => {
            if (response.ok) {
                form.style.display = 'none'; // Hide the form
                document.getElementById('thank-you-message').style.display = 'block'; // Show the thank-you message
            } else {
                alert('Oops! There was a problem with your submission. Please try again.');
            }
        })
        .catch(error => alert('Error occurred: ' + error));
});
</script>