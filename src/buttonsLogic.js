const buttonsLogic = () => {
  const buttons = document.querySelectorAll(".btns");
  buttons.forEach((currBtn) => {
    currBtn.addEventListener("click", () => {
      buttons.forEach((bton) => {
        bton.classList.remove("active", "dark-active");
      });

      if (currBtn.classList.contains("dark-div"))
        currBtn.classList.add("dark-active");
      else if (currBtn.classList.contains("light-div"))
        currBtn.classList.add("active");

      const input = document.querySelector("#input-box")
      const result = checkWeatherLogic(input.value)
        .then((data) => dynamicDivLogic(data))
        .catch((err) => console.error(err));
    });
  });
};
