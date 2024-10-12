

// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// >>>>>>>>>>>>>>>>>> FORMS FEEDBACK <<<<<<<<<<<<<<<<<<<

document.querySelector('.contact__form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Show a message while the form is submitting
  const responseDiv = document.getElementById('formResponse');
  responseDiv.style.display = 'block';
  responseDiv.textContent = 'Submitting...';

  // Use Formspree to handle the submission
  fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: {
          Accept: 'application/json'
      }
  })
  .then(response => {
      if (response.ok) {
          responseDiv.textContent = 'Thank you for your message! I will get back to you shortly.';
          responseDiv.style.color = 'green';
          this.reset(); // Reset the form fields
      } else {
          responseDiv.textContent = 'Oops! There was a problem submitting your message. Please try again.';
          responseDiv.style.color = 'red';
      }
  })
  .catch(error => {
      responseDiv.textContent = 'Oops! There was a problem submitting your message. Please try again.';
      responseDiv.style.color = 'red';
  });
});