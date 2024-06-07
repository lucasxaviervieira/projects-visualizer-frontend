const dropdown = document.getElementById("dropdown");
const dropdownButton = document.querySelector(
  '[data-dropdown-toggle="dropdown"]'
);
document.addEventListener("click", function (event) {
  if (!dropdown || !dropdownButton || event.target === dropdownButton) {
    return;
  }

  dropdown.classList.remove(
    "transition",
    "duration-150",
    "ease-in-out",
    "opacity-100",
    "z-40"
  );
  dropdown.classList.add("hidden", "opacity-0", "z-0");
});

document.getElementById("dropdown").addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent closing on clicks inside the dropdown
});

dropdownButton.addEventListener("click", function () {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.remove("hidden", "opacity-0", "z-0");
  dropdown.classList.add(
    "transition",
    "duration-150",
    "ease-in-out",
    "opacity-100",
    "z-40"
  );
});
