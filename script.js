// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Modal functionality
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Volume Slider functionality
const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');

volumeSlider.oninput = function() {
  volumeValue.innerText = this.value;
}