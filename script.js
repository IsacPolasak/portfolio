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




// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.getElementById("scroll-to-quicklinks");
//   const quicklinks = document.getElementById("quicklinks");

//   if (!btn || !quicklinks) return;   // safety check

//   btn.addEventListener("click", () => {

//     /*  If you have a fixed/sticky nav bar, set its height here.
//         Change 80 to whatever your header's real height is
//         (or 0 if you don’t need an offset).                      */
//     const offset = 80;

//     const targetY =
//       quicklinks.getBoundingClientRect().top + window.pageYOffset - offset;

//     window.scrollTo({
//       top: targetY,
//       behavior: "smooth"
//     });
//   });
// });

// #scroll-to-quicklinks {
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   width: 45px;
//   height: 45px;
//   border: none;
//   border-radius: 50%;
//   background-color: rgb(255, 79, 184);
//   color: white;
//   font-size: 1.2em;
//   font-weight: bold;
//   cursor: pointer;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   transition: background-color 0.3s ease;
//   z-index: 999;
// }

// #scroll-to-quicklinks:hover {
//   background-color: rgb(218, 40, 150);
// }

//     <button id="scroll-to-quicklinks" aria-label="Jump to Quicklinks">
//         ↑
//     </button>