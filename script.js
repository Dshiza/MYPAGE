document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("language");

  select.addEventListener("change", function (e) {
    const selectedOption = select.options[select.selectedIndex];
    const flag = selectedOption.getAttribute("data-flag");

    if (flag == "en") {
      select.style.backgroundImage = `url("./assets/united-kingdom-flag.png")`;
    } else if (flag == "sp") {
      select.style.backgroundImage = `url("./assets/spain-flag.png")`;
    } else select.style.backgroundImage = `url("./assets/portugal-flag.png")`;
  });

  // Triggering change event for proper initial state - en lang
  select.dispatchEvent(new Event("change"));

  const header = document.querySelector("header");
  const menuButton = document.querySelector(".small-nav");
  const mainMenu = document.getElementById("main-menu");

  const handleMenuButtonClick = (event) => {
    event.stopPropagation();

    //TODO: MAYBE change this to an event listener change, since it is carrying away the basic state
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", !isExpanded);
    mainMenu.style.display = isExpanded ? "none" : "block";
  };

  const handleHeaderClick = (event) => {
    if (
      !menuButton.contains(event.target) &&
      !mainMenu.contains(event.target)
    ) {
      menuButton.setAttribute("aria-expanded", "false");
      mainMenu.style.display = "none";
    }
  };

  const setupMenuBehavior = () => {
    mainMenu.style.display = "none";
    if (window.innerWidth <= 980) {
      mainMenu.style.display = "block";
      menuButton.setAttribute("aria-expanded", "false");
      // Small screen behavior
      menuButton.addEventListener("click", handleMenuButtonClick);
      header.addEventListener("click", handleHeaderClick);
      mainMenu.style.display = "none";
    } else {
      // Large screen behavior
      menuButton.setAttribute("aria-expanded", "true");
      mainMenu.style.display = "flex";
      menuButton.removeEventListener("click", handleMenuButtonClick);
      header.removeEventListener("click", handleHeaderClick);
    }
  };

  // Initial setup
  setupMenuBehavior();
  //menuButton.addEventListener("click", handleMenuButtonClick);

  let lastWindowWidth = window.innerWidth;

  // Adjust behavior on window resize
  window.addEventListener("resize", () => {
    // Only update if the window crosses the 980px threshold
    if (
      (lastWindowWidth <= 980 && window.innerWidth > 980) ||
      (lastWindowWidth > 980 && window.innerWidth <= 980)
    ) {
      setupMenuBehavior();
    }
    lastWindowWidth = window.innerWidth;
  });
});
