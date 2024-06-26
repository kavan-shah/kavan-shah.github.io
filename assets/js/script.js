'use strict';

// Array of titles
const titles = ['Robotics Engineer', 'Mechatronics Engineer', 'Automation Engineer'];

function updateTitle() {
  const titleContainer = document.querySelector('.title-container');
  const titles = ['Robotics Engineer', 'Mechatronics Engineer', 'Automation Engineer'];
  let currentTitleElement = document.querySelector('.title-text');

  // Determine the appropriate start position and movement based on screen size
  let startPosition = window.innerWidth >= 580 ? 25 : 21;
  let moveStep = window.innerWidth >= 580 ? 25 : 21;

  // Create a new title element for the next title
  const nextIndex = (titles.indexOf(currentTitleElement?.textContent) + 1) % titles.length;
  const newTitle = titles[nextIndex];
  const newTitleElement = document.createElement('div');
  newTitleElement.textContent = newTitle;
  newTitleElement.classList.add('title-text');
  newTitleElement.style.opacity = '0'; // Start with 0 opacity
  newTitleElement.style.transform = `translateY(${startPosition}px)`; // Start position

  // Insert the new title element after the current title element
  titleContainer.appendChild(newTitleElement);

  // Slide up animation
  const slideUp = () => {
    const step = 1 / 100; // Number of steps for animation
    let opacity = 0;
    let position = 0; // Start position
    const interval = setInterval(() => {
      opacity += step;
      position += step * moveStep; // Move upwards
      if (currentTitleElement && currentTitleElement.parentNode === titleContainer) {
        currentTitleElement.style.opacity = 1 - opacity;
      }
      newTitleElement.style.opacity = opacity;
      newTitleElement.style.transform = `translateY(-${position}px)`; // Move upwards
      if (opacity >= 1) {
        clearInterval(interval);
        if (currentTitleElement && currentTitleElement.parentNode === titleContainer) {
          titleContainer.removeChild(currentTitleElement);
        }
        newTitleElement.style.opacity = 1; // Ensure full opacity
        newTitleElement.style.transform = 'none'; // Reset transform
      }
    }, 7);
  };

  slideUp();
}

// Call the function when the window resizes to update the start position and movement
window.addEventListener('resize', updateTitle);

// Call the function initially to set up the animation based on the initial screen size
updateTitle();

// Set interval to update title every 5 seconds
setInterval(updateTitle, 5000);


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// // const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     // modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     // modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);

// projects variables
const projectItems = document.querySelectorAll("[data-filter-item]");
const projectsModalContainer = document.querySelector("[data-projects-modal-container]");
const projectsModalCloseBtn = document.querySelector("[data-projects-modal-close-btn]");
const projectsOverlay = document.querySelector("[data-projects-overlay]");

// projects modal variable
// const projectsModalImg = document.querySelector("[data-projects-modal-img]");
const projectsModalTitle = document.querySelector("[data-projects-modal-title]");
const projectsModalCategory = document.querySelector("[data-projects-modal-category]");
const projectsModalInformation = document.querySelector("[data-projects-modal-information]");

// projects modal toggle function
const projectsModalFunc = function () {
  projectsModalContainer.classList.toggle("active");
  projectsOverlay.classList.toggle("active");
}

// add click event to all project items
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function () {
    // projectsModalImg.src = this.querySelector(".project-img img").src;
    // projectsModalImg.alt = this.querySelector(".project-img img").alt;
    projectsModalTitle.innerHTML = this.querySelector("[project-title]").innerHTML;
    projectsModalCategory.innerHTML = this.querySelector("[project-category]").innerHTML;
    
    const projectInformation = this.querySelector("[project-information]");
    if (projectInformation) {
      projectsModalInformation.innerHTML = projectInformation.innerHTML;
    } else {
      projectsModalInformation.innerHTML = ""; // Clear the content if not available
    }

    projectsModalFunc();
  });
}

// add click event to projects modal close button
projectsModalCloseBtn.addEventListener("click", projectsModalFunc);
projectsOverlay.addEventListener("click", projectsModalFunc);




// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}