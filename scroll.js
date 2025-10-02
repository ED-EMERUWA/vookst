// ee - this file checks if an elemnt is in view and adds the show class to it causing css animations due to class change and smn bout dom
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".hide").forEach((el) => observer.observe(el));
