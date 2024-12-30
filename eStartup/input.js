document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Show loading state
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.sent-message').style.display = 'none';
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Create FormData object to send with the POST request
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
  
    // Make the POST request to the Google Apps Script URL
    fetch('https://script.google.com/macros/s/AKfycbzvJcd9rjyYBEIJvKOcTzcDRtMrGJEXCUyFHcf48dDnLEvc16KqVpdseLmXU_jpSzIh/exec', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        // Success handling
        document.querySelector('.sent-message').style.display = 'block';
        document.querySelector('.loading').style.display = 'none';
  
        // Clear the form
        document.getElementById('contactForm').reset();
      } else {
        // Error handling
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.loading').style.display = 'none';
      }
    })
    .catch(error => {
      // Error handling
      document.querySelector('.error-message').style.display = 'block';
      document.querySelector('.loading').style.display = 'none';
      console.error('Error submitting form:', error);
    });
  });
  