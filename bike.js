function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('customerName').value;
  const bike = document.getElementById('selectedBike').value;
  const date = document.getElementById('bookingDate').value;

    // Show popup message
    var popup = document.getElementById('popupMsg');
    popup.style.display = 'block';
    popup.style.opacity = '1';
    setTimeout(function() {
      popup.style.opacity = '0';
      setTimeout(function() {
        popup.style.display = 'none';
      }, 500);
    }, 3000);
  const confirmationMsg = document.getElementById('confirmationMsg');
  confirmationMsg.textContent = 'Booking Done!';
  confirmationMsg.style.color = 'white';
  confirmationMsg.style.backgroundColor = 'green';
  confirmationMsg.style.padding = '8px';
  confirmationMsg.style.borderRadius = '5px';
  confirmationMsg.style.fontWeight = 'normal';
  confirmationMsg.style.textAlign = 'center';
  confirmationMsg.style.fontSize = '1rem';
  confirmationMsg.style.transition = 'opacity 0.5s';
  confirmationMsg.style.opacity = '1';
  // Hide the message after 3 seconds
  setTimeout(function() {
    confirmationMsg.style.opacity = '0';
    setTimeout(function() {
      confirmationMsg.textContent = '';
      confirmationMsg.removeAttribute('style');
    }, 500);
  }, 3000);
  // Reset form after submission
  event.target.reset();
  document.getElementById('selectedBike').value = bike;
}

function bookBike(bikeName) {
  document.getElementById('selectedBike').value = bikeName;
  // Optionally, scroll to the booking form for better UX
  document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
}
