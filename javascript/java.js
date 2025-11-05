
      document.getElementById('year').textContent = new Date().getFullYear();

      const slides = document.querySelectorAll('.slideshow img');
      let current = 0;
      function showNextSlide() {
          slides[current].classList.remove('active');
          current = (current + 1) % slides.length;
          slides[current].classList.add('active');
      }
      setInterval(showNextSlide, 4000);




const body = document.body;
let hue = 0;
let opacity = 0.08;
let increasing = true;

function animateGlow() {
    
    hue = (hue + 0.05) % 360;
    body.style.setProperty("--glow-hue", hue);

   
    if (increasing) {
        opacity += 0.0002;
        if (opacity >= 0.12) increasing = false;
    } else {
        opacity -= 0.0002;
        if (opacity <= 0.06) increasing = true;
    }

    body.style.setProperty("--glow-opacity", opacity);
    requestAnimationFrame(animateGlow);
}

animateGlow();




const newsSection = document.getElementById("news");
const toggleButton = document.getElementById("toggle-news");

toggleButton.addEventListener("click", () => {
    if (newsSection.style.display === "none") {
        newsSection.style.display = "block"; 
        toggleButton.textContent = "Hide News";
    } else {
        newsSection.style.display = "none"; 
        toggleButton.textContent = "Show News";
    }
});
