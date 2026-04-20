const themeLogic = (theme) => {
  theme.addEventListener("click", () => {
    theme.innerHTML = `<i class="fa-solid fa-sun" style="font-size: 25px;"></i>`
    document.body.classList.toggle("dark");

    const multiDiv = document.querySelectorAll(".light-div, .dark-div");
    multiDiv.forEach((item) => {
      item.classList.toggle("light-div");
      item.classList.toggle("dark-div");
    });
  });
};
