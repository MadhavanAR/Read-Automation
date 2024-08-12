// js for hero section

const images = [
  "public/img/bg/bg1.png",
  "public/img/bg/bg2.png",
  "public/img/bg/bg3.png",
];

let hcurrentIndex = 0;

// Function to change the background image
function changeBackgroundImage(){
  const heroElement = document.getElementById('home');
  heroElement.style.backgroundImage = `url(${images[hcurrentIndex]})`;
  hcurrentIndex = (hcurrentIndex + 1) % images.length; // Loop back to the first image
}

// Change the background image every 3 seconds
setInterval(changeBackgroundImage, 3000);

// Initial call to set the first image
changeBackgroundImage();



let fcurrentIndex = 0;

function changeFooterBackgroundImage(){
  const footerElement = document.getElementById('21');
  footerElement.style.backgroundImage = `url(${images[fcurrentIndex]})`;
  fcurrentIndex = (fcurrentIndex + 1) % images.length; // Loop back to the first image
}

// Change the background image every 3 seconds
setInterval(changeFooterBackgroundImage, 3000);

// Initial call to set the first image
changeFooterBackgroundImage();



//js for hidden navbar
let navbar = document.getElementById('navbar');
let hideTimeout;

function showNavbar() {
    clearTimeout(hideTimeout);
    navbar.classList.remove('hidden');
    hideTimeout = setTimeout(() => {
        navbar.classList.add('hidden');
    }, 3000); // Hide after 3 seconds of inactivity
}

// Show the navbar when mouse moves
document.addEventListener('mousemove', showNavbar);

// Also show the navbar when a key is pressed (optional)
document.addEventListener('keydown', showNavbar);

document.addEventListener('scroll', showNavbar);

// Initially hide the navbar after page load
window.addEventListener('load', () => {
    hideTimeout = setTimeout(() => {
        navbar.classList.add('hidden');
    }, 3000); // Adjust delay as needed
});






//js for services image slider

const sliders = document.querySelectorAll(".slider-container");

sliders.forEach((sliderContainer) => {
    const slider = sliderContainer.querySelector(".slider");
    const slides = slider.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Create dots
    const dotsContainer = sliderContainer.querySelector(".dots");
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === currentIndex) dot.classList.add("active");
        dot.addEventListener("click", () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    }

    slider.querySelector(".next").addEventListener("click", () => {
        moveToSlide(currentIndex + 1);
    });

    slider.querySelector(".prev").addEventListener("click", () => {
        moveToSlide(currentIndex - 1);
    });

    function moveToSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slider.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dotsContainer.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }
});


//get in touch form.

function submitForm() {
  var form = document.getElementById("dataForm");
  var formData = new FormData(form);

  fetch(
    "  ", //paste the link of the sheet.
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.text())
    .then((result) => {
      alert("Form submitted successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
