const headerSection = () => {
  const header = document.createElement("div");
  header.id = "header";

  //creating div for logo
  const logoHead = document.createElement("div");
  logoHead.id = "logo1";
  logoHead.className = "light-div";
  logoHead.innerHTML = `<h1><i class="fa-solid fa-cloud"></i> Weather</h1>`;

  //creating div for input
  const inputDiv = document.createElement("div");
  inputDiv.id = "input-div";

  const input = document.createElement("input");
  input.id = "input-box";
  input.className = "light-div";
  input.type = "text";
  input.placeholder = "Ankara";

  inputDiv.append(input);

  const locationIcon = document.createElement("div");
  locationIcon.id = "locationIcon"
  locationIcon.className = "btn light-div";
  locationIcon.innerHTML = `<i class="fa-solid fa-location-crosshairs" style="font-size: 25px;"></i>`;

  const theme = document.createElement("div");
  theme.id = "theme"
  theme.className = "btn light-div";
  theme.innerHTML = `<i class="fa-regular fa-moon" style="font-size: 25px;"></i>`;

  const gitDiv = document.createElement("div");
  gitDiv.className = "btn";
  gitDiv.id = "git";
  gitDiv.textContent = "Support Project";

  //appending all three div's (logo,input, loc,theme,git) in header
  header.append(logoHead, inputDiv, locationIcon, theme, gitDiv);

  return header
};

