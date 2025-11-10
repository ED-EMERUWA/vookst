 // Initialize EmailJS
  (function () {
    emailjs.init("-IGH6QtuUw221YXss"); // Replace with your EmailJS Public Key
  })();

  // Handle the form
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    let from_name = document.querySelector('input[name="from_name"]').value;
    let from_email = document.querySelector('input[name="from_email"]').value;
    let company = document.querySelector('input[name="company"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    // Get selected services
    let services = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value);
    let service_list = services.join(", ");

    // Optional: add timestamp
    let time = new Date().toLocaleString();

    // Prepare the template parameters
    let templateParams = {
      from_name: from_name,
      client_email: from_email,
      company: company,
      message: message,
      service_list: service_list,
      time: time
    };

    // Send the email
    emailjs.send("test_1", "template_b7ok79j", templateParams)// servce_ID, template_ID
      .then(function (response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Clear the form
      }, function (error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });