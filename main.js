
document.addEventListener("DOMContentLoaded", () => {
  // Create the button
  const btn = document.createElement("button");
  btn.id = "backToTop";
  btn.innerHTML = "↑";
  btn.title = "Back to Top";
  document.body.appendChild(btn);

  // Show button after scrolling 300px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // Smooth scroll to top when clicked
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});