const toggleButton = document.getElementById("toggleButton");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const icon = toggleButton.querySelector("i");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("bxs-sun");
    icon.classList.add("bxs-moon");
  } else {
    icon.classList.remove("bxs-moon");
    icon.classList.add("bxs-sun");
  }
});
