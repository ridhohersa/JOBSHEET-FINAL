
    function showSection(sectionId) {
      const sections = ["courses", "webdev", "jadwal", "bantuan"];
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          section.style.display = (id === sectionId) ? "block" : "none";
        }
      });

      const allButtons = document.querySelectorAll("button.btn-outline-light");
      allButtons.forEach(btn => {
        btn.classList.remove("active");
        if (
          (sectionId === "courses" && btn.textContent.includes("Populer")) ||
          (sectionId === "webdev" && btn.textContent.includes("Jenis Lukis")) ||
          (sectionId === "bantuan" && btn.textContent.includes("Bantuan"))
        ) {
          btn.classList.add("active");
        }
      });

      history.pushState(null, "", `#${sectionId}`);
    }

    window.addEventListener("load", () => {
      const hash = location.hash.replace("#", "");
      if (["courses", "webdev", "jadwal", "bantuan"].includes(hash)) {
        showSection(hash);
      } else {
        showSection("courses");
      }
    });

    document.addEventListener("DOMContentLoaded", function () {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card, i) => {
        card.classList.add("fade-in");
        card.style.animationDelay = (i * 0.1) + "s";
      });
    });
