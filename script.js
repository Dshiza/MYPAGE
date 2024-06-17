document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("language");

  select.addEventListener("change", function () {
    const selectedOption = select.options[select.selectedIndex];
    const flag = selectedOption.getAttribute("data-flag");

    if (flag == "en") {
      select.style.backgroundImage = `url("./assets/united-kingdom-flag.png")`;
    } else if (flag == "sp") {
      select.style.backgroundImage = `url("./assets/spain-flag.png")`;
    } else select.style.backgroundImage = `url("./assets/portugal-flag.png")`;
  });

  // Trigger change event to update flag on page load
  select.dispatchEvent(new Event("change"));
});
