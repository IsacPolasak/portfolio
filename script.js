document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("header-image");

    if (logo) {
        logo.addEventListener("mouseover", () => {
            logo.src = "./photos/logohover.png";
        });

        logo.addEventListener("mousedown", () => {
            logo.src = "./photos/logoactive.png";
        });

        logo.addEventListener("mouseup", () => {
            logo.src = "./photos/headerlogo.png";
        });

        logo.addEventListener("mouseleave", () => {
            logo.src = "./photos/headerlogo.png";
        });
    }
});


// Burger menu opens menu when clicked.
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const nav = document.querySelector(".header-right");
    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

// Allows the marquee to be paused when clicking.
document.addEventListener('DOMContentLoaded', () => {
  const marquee = document.querySelector('.marquee-content');

  marquee.addEventListener('click', () => {
    const isPaused = marquee.style.animationPlayState === 'paused';
    marquee.style.animationPlayState = isPaused ? 'running' : 'paused';
  });
});
// Copies phone number to clipboard
document.addEventListener("DOMContentLoaded", function () {
  const phoneNumber = document.getElementById("number");

  if (phoneNumber) {
    phoneNumber.addEventListener("click", () => {
      navigator.clipboard.writeText(phoneNumber.textContent.trim());

      const tooltip = phoneNumber.nextElementSibling;
      if (tooltip && tooltip.classList.contains("tooltip-text")) {
        tooltip.textContent = "Copied!";
        setTimeout(() => {
          tooltip.textContent = "Copy to clipboard";
        }, 1500);
      }
    });
  }
});

// Makes tumbleweed go across screen every 20 seconds.
document.addEventListener('DOMContentLoaded', () => {
  const tumbleweed = document.querySelector('.tumbleweed');
  if (!tumbleweed) return;

  function rollOnce() {
    // Remove the class
    tumbleweed.classList.remove('roll-animation');

    // Reset position and rotation immediately
    tumbleweed.style.left = '-150px';
    tumbleweed.style.transform = 'rotate(0deg)';

    // Force reflow — this makes the browser "forget" the previous animation state
    void tumbleweed.offsetWidth;

    // Add the animation class back to trigger the animation
    tumbleweed.classList.add('roll-animation');
  }

  setInterval(rollOnce, 30000);
});

