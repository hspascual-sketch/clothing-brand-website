document.getElementById("year").innerText = new Date().getFullYear();

const greeting = document.getElementById("greeting");
if (greeting) {
    const h = new Date().getHours();
    greeting.innerText =
        h < 12 ? "Good morning!" :
        h < 18 ? "Good afternoon!" : "Good evening!";
}

function changeMessage() {
    document.getElementById("dynamicText").innerText =
        "Thank you for supporting our brand!";
}

let menuToggle = document.getElementById("menuToggle");
let nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
}

const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.innerText = "Please fill all fields.";
            formMessage.style.color = "red";
        } else {
            formMessage.innerText = "Message sent successfully!";
            formMessage.style.color = "green";
            form.reset();
        }
    });
}
