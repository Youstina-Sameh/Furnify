
//cursol 
document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slider");
  let buttons = document.querySelectorAll(".slider-button");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    // Hide all slides and show only the current one
    slides.forEach((slide, i) => {
      slide.classList.toggle("hidden", i !== index);
    });

    // Update all buttons - set active button to white, others to gray
    buttons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.remove("border-2", "border-white", "bg-transparent");
        btn.classList.add("bg-white");
      } else {
        btn.classList.remove("bg-white");
        btn.classList.add("border-2", "border-white", "bg-transparent");
      }
    });
    currentSlide = index;
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  function resetSlider(index) {
    clearInterval(slideInterval);
    showSlide(index);

  }

  // Initialize: set first button as active
  showSlide(0);

  // Add click events to indicator buttons
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => resetSlider(index));
  });

  // Add click events to prev/next buttons
  document.getElementById("prev").addEventListener("click", function () {
    clearInterval(slideInterval);
    prevSlide();

  });

  document.getElementById("next").addEventListener("click", function () {
    clearInterval(slideInterval);
    nextSlide();
  });
});





function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}



//Toggle fav Icon 
function toggleFav(element) {
  element.classList.toggle('clicked');

  // Change between regular and solid heart
  if (element.classList.contains('clicked')) {
    element.classList.remove('fa-regular');
    element.classList.add('fa-solid');
  } else {
    element.classList.remove('fa-solid');
    element.classList.add('fa-regular');
  }
}

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    const arrowIcon = item.querySelector('.arrow i');
    const isOpen = !answer.classList.contains('hidden');

    //close all opened questions
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.classList.add('hidden');
      ans.classList.remove('bg-cofeecolor', 'text-white');
      ans.classList.add('bg-questioncolor', 'text-black');

      const question = ans.previousElementSibling;
      question.classList.remove('bg-cofeecolor', 'text-white', 'text-xl');
      question.classList.add('bg-questioncolor', 'text-black', 'text-2xl');

      const icon = question.querySelector('.arrow i');
      icon.classList.remove('rotate-180');
    });

    //open/close current
    if (isOpen) {
      answer.classList.add('hidden');
      answer.classList.remove('bg-cofeecolor', 'text-white');
      answer.classList.add('bg-questioncolor', 'text-black');

      item.classList.remove('bg-cofeecolor', 'text-white', 'text-xl');
      item.classList.add('bg-questioncolor', 'text-black', 'text-2xl');

      arrowIcon.classList.remove('rotate-180');
    } else {
      answer.classList.remove('hidden');
      answer.classList.remove('bg-questioncolor', 'text-black');
      answer.classList.add('bg-cofeecolor', 'text-white');

      item.classList.remove('bg-questioncolor', 'text-black', 'text-2xl');
      item.classList.add('bg-cofeecolor', 'text-white', 'text-xl');

      arrowIcon.classList.add('rotate-180');
    }
  });
});



// form validation
function validateForm(mode = "signin") {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPasswordElement = document.getElementById("confirmPassword");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // Reset previous errors
  emailError.textContent = "";
  passwordError.textContent = "";
  if (confirmPasswordError) confirmPasswordError.textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  // Email validation
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Confirm password validation (only for signup)
  if (mode === "signup" && confirmPasswordElement) {
    const confirmPassword = confirmPasswordElement.value.trim();
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      valid = false;
    }
  }

  return valid;
}
