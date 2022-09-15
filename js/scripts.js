// Variables and elements selection
const homeClick = document.querySelector("#home-click")

const aboutClick = document.querySelector("#about-click");
const aboutMeHide = document.querySelector("#about-me-hide");
const aboutMe = document.querySelector("#about-me");

const projectsClick = document.querySelector("#projects-click");
const projectsHide = document.querySelector("#projects-hide");
const projects = document.querySelector("#projects");

const contactClick = document.querySelector("#contact-click");
const contactHide = document.querySelector("#contact-hide");
const contact = document.querySelector("#contact");

// Events
// Home, reset all display from contents
homeClick.addEventListener("click", (e) => {
    e.preventDefault();
    // Hide 
    projects.classList.add("hide");
    aboutMe.classList.add("hide");
    contact.classList.add("hide");
});


// Open about when -click on-
aboutClick.addEventListener("click", (e) => {
    e.preventDefault();
    // Show
    aboutMe.classList.remove("hide");
    // Hide 
    projects.classList.add("hide");
    contact.classList.add("hide");
});

// Close about when click on -hide-
aboutMeHide.addEventListener("click", (e) => {
    e.preventDefault();
    aboutMe.classList.add("hide");
});

//
// Open projects when -click on-
projectsClick.addEventListener("click", (e) => {
    e.preventDefault();
    // Show
    projects.classList.remove("hide");
    // Hide 
    aboutMe.classList.add("hide");
    contact.classList.add("hide");
});

// Close project when click on -hide-
projectsHide.addEventListener("click", (e) => {
    e.preventDefault();
    projects.classList.add("hide");
});

//
// Open contact when -click on-
contactClick.addEventListener("click", (e) => {
    e.preventDefault();
    // Show
    contact.classList.remove("hide");
    // Hide 
    aboutMe.classList.add("hide");
    projects.classList.add("hide");
});

// Close project when click on -hide-
contactHide.addEventListener("click", (e) => {
    e.preventDefault();
    contact.classList.add("hide");
});
