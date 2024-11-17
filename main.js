var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var button1 = document.get
var slider = document.querySelector(".slideshow-container")
var main = document.querySelector(".Main")
var section2 = document.querySelector(".section2")
var section3 = document.querySelector(".section3")



function diveToSection2() {
  main.style.display = "flex"
  slider.style.display = "none"
  section2.style.display = "flex"
}


function diveToSection3() {
  section2.style.display = "none"
  main.style.display = "none"
  section3.style.display = "flex"
}




//form

function submitForm() {
  const selectedOption = document.querySelector('input[name="response"]:checked');
  const explanation = document.getElementById('explanation').value.trim();
  const responseMessage = document.getElementById('responseMessage');

  if (!selectedOption) {
    responseMessage.textContent = "Please select an option! 🥺";
    responseMessage.style.color = "red";
    return;
  }

  const choice = selectedOption.value;
  if (choice === "yes") {
    responseMessage.textContent = `Yay! You said YES! 😍 ${explanation ? "Your message: " + explanation : ""}`;
    responseMessage.style.color = "#ff69b4";
  } else {
    responseMessage.textContent = `Ouch! You said NO. 😢 ${explanation ? "Your message: " + explanation : ""}`;
    responseMessage.style.color = "#333";
  }
}

var section4 = document.querySelector(".section4")
function displaySection4() {
  section4.style.display = "flex"
  section3.style.display = "none"
}