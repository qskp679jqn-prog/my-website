function saveBooking(e) {
  e.preventDefault();

  let booking = {
    name: document.getElementById("name").value,
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Booking confirmed!");
}
