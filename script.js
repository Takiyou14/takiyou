document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll("[data-scroll]");
  const icons = document.querySelectorAll(".fixed ul li a");
  const contact = document.getElementById("contactWhite");

  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);

      icons.forEach((icon) => {
        icon.classList.remove("text-white");
      });

      if (targetId === "contact") {
        contact.classList.add("text-white");
      } else {
        this.classList.add("text-white");
      }

      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
