$(document).ready(() => {
  $("#owl-example").owlCarousel({
    items: 4,
    slideSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
  });
  $("navigation").sticky({
    topSpacing: 75,
  });
});
// contact us
let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactmessage = document.getElementById("contact-message");
const sendContactForm = (e) => {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "anandkeshri271@gmail.com",
    Password: "5FD6CD68E9994305783BE43D59086B8AC950",
    To: "anandkeshri271@gmail.com",
    From: "anandkeshri271@gmail.com",
    Subject: "request from restaurant",
    Body: `
    Name: ${contactName.value}
    <br>
    Email: ${contactEmail.value}
    <br>
    Message: ${contactmessage.value}`,
  }).then((message) => alert(message));
};
contactName.value = "";
contactEmail.value = "";
contactmessage.value = "";

const subscribeEmail = document.getElementById("subscribe-email");
const sendSubmit = (e) => {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "anandkeshri271@gmail.com",
    Password: "5FD6CD68E9994305783BE43D59086B8AC950",
    To: "anandkeshri271@gmail.com",
    From: "anandkeshri271@gmail.com",
    Subject: "Subscribe from restaurant",
    Body: `Email: ${subscribeEmail.value}`,
  }).then((message) => alert(message));
  subscribeEmail.value = "";
};
