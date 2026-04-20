const inputLogic = (input) => {
  input.addEventListener("keydown", () => {
    if (event.key === "Enter") {
      event.preventDefault();
      const result = checkWeatherLogic(input.value).then((data) =>
        dynamicDivLogic(data),
      );
    }
  });
};
