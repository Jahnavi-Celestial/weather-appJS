const footerSection = () => {
  const footerDiv = document.createElement("div");
  footerDiv.id = "footerDiv";

  const fDiv1 = document.createElement("div");
  fDiv1.id = "logo2";
  fDiv1.className = "light-div";
  fDiv1.innerHTML = `<h1><i class="fa-solid fa-cloud"></i> Weather</h1>`;

  const fDiv2 = document.createElement("div");
  fDiv2.id = "footerText";
  fDiv2.className = "light-div";
  fDiv2.innerText = "Weather data provided by OpenWeather";

  const fDiv3 = document.createElement("div");
  fDiv3.id = "scrollToTop";
  fDiv3.className = "light-div";
  fDiv3.innerText = "^";

  footerDiv.append(fDiv1, fDiv2, fDiv3);

  return footerDiv;
};
