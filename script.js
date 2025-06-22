document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("header-image");
  
  if (logo) {
    const isProjectPage = window.location.pathname.includes("/projects/");
    const basePath = isProjectPage ? "../photos/" : "./photos/";

    logo.addEventListener("mouseover", () => {
      logo.src = `${basePath}logohover.png`;
    });

    logo.addEventListener("mousedown", () => {
      logo.src = `${basePath}logoactive.png`;
    });

    logo.addEventListener("mouseup", () => {
      logo.src = `${basePath}logohover.png`;
    });

    logo.addEventListener("mouseleave", () => {
      logo.src = `${basePath}headerlogo.png`;
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



// document.addEventListener("DOMContentLoaded", function () {
//   const headerImg = document.getElementById("header-image");
//   const logoLink = document.getElementById("logo-link");

//   logoLink.addEventListener("mouseover", function () {
//     headerImg.src = "../photos/logohover.png";
//   });

//   logoLink.addEventListener("mouseout", function () {
//     headerImg.src = "../photos/headerlogo.png";
//   });

//   logoLink.addEventListener("mousedown", function () {
//     headerImg.src = "../photos/logoactive.png";
//   });

//   logoLink.addEventListener("mouseup", function () {
//     headerImg.src = "../photos/logohover.png";
//   });
// });