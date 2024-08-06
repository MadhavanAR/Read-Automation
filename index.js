


// js for hero section
const images = document.querySelectorAll(".hero img");
      let current = 0;

      function changeImage() {
        images[current].classList.remove("active");
        current = (current + 1) % images.length;
        images[current].classList.add("active");
      }

      setInterval(changeImage, 3000); // Change image every 3 seconds



      //js for services image slider

      const sliders = document.querySelectorAll(".slider");

      sliders.forEach((slider, index) => {
        const slides = slider.querySelectorAll(".slide");
        const totalSlides = slides.length;
        let currentIndex = 0;

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
          slider.querySelector(".slides").style.transform = `translateX(-${
            currentIndex * 100
          }%)`;
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