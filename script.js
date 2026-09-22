document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }


  const navItems = document.querySelectorAll(".nav-links li a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });


  const filterBtn = document.getElementById("filter-btn");
  if (filterBtn) {
    filterBtn.addEventListener("click", function () {
      const regionFilter = document.getElementById("region").value;
      const categoryFilter = document.getElementById("category").value;
      const ratingFilter = document.getElementById("rating").value;

      const destinationCards = document.querySelectorAll(".destination-card");

      destinationCards.forEach((card) => {
        const region = card.getAttribute("data-region");
        const category = card.getAttribute("data-category");
        const rating = parseFloat(card.getAttribute("data-rating"));

        let showCard = true;

        if (regionFilter !== "all" && region !== regionFilter) {
          showCard = false;
        }

        if (categoryFilter !== "all" && category !== categoryFilter) {
          showCard = false;
        }

        if (ratingFilter !== "all" && rating < parseFloat(ratingFilter)) {
          showCard = false;
        }

        if (showCard) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Form Validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      const name = document.getElementById("name");
      const nameError = document.getElementById("name-error");

      if (name.value.trim() === "") {
        showError(name, nameError, "Name is required");
        isValid = false;
      } else if (name.value.trim().length < 3) {
        showError(name, nameError, "Name must be at least 3 characters");
        isValid = false;
      } else {
        hideError(name, nameError);
      }

      // Validate Email
      const email = document.getElementById("email");
      const emailError = document.getElementById("email-error");

      if (email.value.trim() === "") {
        showError(email, emailError, "Email is required");
        isValid = false;
      } else if (!validateEmail(email.value)) {
        showError(email, emailError, "Please enter a valid email address");
        isValid = false;
      } else {
        hideError(email, emailError);
      }

      // Validate Phone
      const phone = document.getElementById("phone");
      const phoneError = document.getElementById("phone-error");

      if (phone.value.trim() === "") {
        showError(phone, phoneError, "Phone number is required");
        isValid = false;
      } else if (!validatePhone(phone.value)) {
        showError(phone, phoneError, "Please enter a valid phone number");
        isValid = false;
      } else {
        hideError(phone, phoneError);
      }

      // Validate Subject
      const subject = document.getElementById("subject");
      const subjectError = document.getElementById("subject-error");

      if (subject.value === "") {
        showError(subject, subjectError, "Please select a subject");
        isValid = false;
      } else {
        hideError(subject, subjectError);
      }

      // Validate Message
      const message = document.getElementById("message");
      const messageError = document.getElementById("message-error");

      if (message.value.trim() === "") {
        showError(message, messageError, "Message is required");
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError(message, messageError, "Message must be at least 10 characters");
        isValid = false;
      } else {
        hideError(message, messageError);
      }

      if (isValid) {
        // Form is valid, you can submit it
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
      }
    });
  }

  // Form Validation 
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      // Validate Full Name
      const fullName = document.getElementById("fullName");
      const fullNameError = document.getElementById("fullName-error");

      if (fullName.value.trim() === "") {
        showError(fullName, fullNameError, "Full name is required");
        isValid = false;
      } else if (fullName.value.trim().length < 3) {
        showError(fullName, fullNameError, "Full name must be at least 3 characters");
        isValid = false;
      } else {
        hideError(fullName, fullNameError);
      }

      // Validate Email
      const email = document.getElementById("email");
      const emailError = document.getElementById("email-error");

      if (email.value.trim() === "") {
        showError(email, emailError, "Email is required");
        isValid = false;
      } else if (!validateEmail(email.value)) {
        showError(email, emailError, "Please enter a valid email address");
        isValid = false;
      } else {
        hideError(email, emailError);
      }

      // Validate Phone
      const phone = document.getElementById("phone");
      const phoneError = document.getElementById("phone-error");

      if (phone.value.trim() === "") {
        showError(phone, phoneError, "Phone number is required");
        isValid = false;
      } else if (!validatePhone(phone.value)) {
        showError(phone, phoneError, "Please enter a valid phone number");
        isValid = false;
      } else {
        hideError(phone, phoneError);
      }

      // Validate Participants
      const participants = document.getElementById("participants");
      const participantsError = document.getElementById("participants-error");

      if (participants.value === "") {
        showError(participants, participantsError, "Number of participants is required");
        isValid = false;
      } else if (parseInt(participants.value) < 1 || parseInt(participants.value) > 20) {
        showError(participants, participantsError, "Number of participants must be between 1 and 20");
        isValid = false;
      } else {
        hideError(participants, participantsError);
      }

      // Validate Destination
      const destination = document.getElementById("destination");
      const destinationError = document.getElementById("destination-error");

      if (destination.value === "") {
        showError(destination, destinationError, "Please select a destination");
        isValid = false;
      } else {
        hideError(destination, destinationError);
      }

      // Validate Package Type
      const packageType = document.getElementById("packageType");
      const packageTypeError = document.getElementById("packageType-error");

      if (packageType.value === "") {
        showError(packageType, packageTypeError, "Please select a package type");
        isValid = false;
      } else {
        hideError(packageType, packageTypeError);
      }

      // Validate Departure Date
      const departureDate = document.getElementById("departureDate");
      const departureDateError = document.getElementById("departureDate-error");

      if (departureDate.value === "") {
        showError(departureDate, departureDateError, "Departure date is required");
        isValid = false;
      } else if (new Date(departureDate.value) < new Date()) {
        showError(departureDate, departureDateError, "Departure date cannot be in the past");
        isValid = false;
      } else {
        hideError(departureDate, departureDateError);
      }

      // Validate Return Date
      const returnDate = document.getElementById("returnDate");
      const returnDateError = document.getElementById("returnDate-error");

      if (returnDate.value === "") {
        showError(returnDate, returnDateError, "Return date is required");
        isValid = false;
      } else if (new Date(returnDate.value) < new Date(departureDate.value)) {
        showError(returnDate, returnDateError, "Return date cannot be before departure date");
        isValid = false;
      } else {
        hideError(returnDate, returnDateError);
      }

      // Validate Terms and Conditions
      const termsConditions = document.getElementById("termsConditions");
      const termsConditionsError = document.getElementById("termsConditions-error");

      if (!termsConditions.checked) {
        showError(termsConditions, termsConditionsError, "You must agree to the terms and conditions");
        isValid = false;
      } else {
        hideError(termsConditions, termsConditionsError);
      }

      if (isValid) {
        alert("Thank you for your booking! We will contact you shortly to confirm your reservation.");
        bookingForm.reset();
      }
    });
  }

  function showError(input, errorElement, message) {
    input.classList.add("error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function hideError(input, errorElement) {
    input.classList.remove("error");
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }

  function validateEmail(email) {
    const atSymbol = email.indexOf("@");
    const dotSymbol = email.lastIndexOf(".");

    if (atSymbol < 1) return false;

    if (dotSymbol <= atSymbol + 1 || dotSymbol === email.length - 1) return false;

    return true;
  }

  function validatePhone(phone) {
    const cleanPhone = phone.replace(/[\s\-$$$$]/g, "");

    for (let i = 0; i < cleanPhone.length; i++) {
      const char = cleanPhone.charAt(i);
      if (char < "0" || char > "9") {
        return false;
      }
    }

    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
  }
});
