const heroSection = () => {
  const hero = document.createElement("div");
  hero.id = "hero";

  const headingHero = document.createElement("h1");
  headingHero.id = "heading-home";
  headingHero.innerText = `Today Overwiew`;

  const heroDiv = document.createElement("div");
  heroDiv.id = "hero-div";

  let curDate = new Date();
  const day = curDate.getDate();
  const month = curDate.toLocaleDateString("en-US", { month: "long" });
  const weekday = curDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const hDiv1 = document.createElement("div");
  hDiv1.id = "hDiv1";
  hDiv1.className = "light-div";
  hDiv1.innerHTML = `<i class="fa-solid fa-cloud-moon" style="font-size: 50px;"></i>
                   <h2 class="temp">13.0°C</h2>
                   <p class="weather">Mist</p>
                   <hr/>
                   <div class="location">
                      <span><i class="fa-solid fa-location-dot" style="font-size: 22px;"></i></span>
                      <p class="city">Delhi</p>
                   </div> 
                   <div class="calender">
                      <span><i class="fa-solid fa-calendar-days" style="font-size: 22px;"></i></span>
                      <p><span class="date">${day} ${month}</span> <span class="day">${weekday}</span></p>
                   </div> 
                  `;

  const hDiv2 = document.createElement("div");
  hDiv2.id = "hDiv2";
  const newDiv1 = document.createElement("div");
  newDiv1.className = "otherWeatherInfo light-div";
  newDiv1.innerHTML = `<div class='temp-icons'><i class="fa-solid fa-wind" style="font-size: 25px;"></i></div>
                        <div class='data' >
                            <p style="padding: 10px 0">Wind Speed</p>
                            <h3 id="speed">2.73 km/h</h3>
                        </div>`;
  const newDiv2 = document.createElement("div");
  newDiv2.className = "otherWeatherInfo light-div";
  newDiv2.innerHTML = `<div class='temp-icons'><i class="fa-solid fa-droplet" style="font-size: 25px;"></i></div>
                        <div class='data'>
                            <p style="padding: 10px 0">Humidity</p>
                            <h3 id="humidity">28%</h3>
                        </div>`;
  const newDiv3 = document.createElement("div");
  newDiv3.className = "otherWeatherInfo light-div";
  newDiv3.innerHTML = `<div class='temp-icons'><i class="fa-solid fa-gauge-simple-high" style="font-size: 25px;"></i></div>
                        <div class='data'>
                            <p style="padding: 10px 0">Pressure</p>
                            <h3 id="pressure">1012 hPa</h3>
                        </div>`;
  const newDiv4 = document.createElement("div");
  newDiv4.className = "otherWeatherInfo light-div";
  newDiv4.innerHTML = `<div class='temp-icons'><i class="fa-solid fa-eye" style="font-size: 25px;"></i></div>
                        <div class='data'>
                            <p style="padding: 10px 0">Visibility</p>
                            <h3 id="visibility">10 km</h3>
                        </div>`;
  const newDiv5 = document.createElement("div");
  newDiv5.className = "otherWeatherInfo light-div";
  newDiv5.innerHTML = `<div class='temp-icons'><i class="fa-solid fa-sun" style="font-size: 25px;"></i></div>
                        <div class='data'>
                            <p style="padding: 10px 0">Sunrise</p>
                            <h3 id="sunrise">05:52</h3>
                        </div>`;
  const newDiv6 = document.createElement("div");
  newDiv6.className = "otherWeatherInfo light-div";
  newDiv6.innerHTML = `<div class='temp-icons'><i class="fa-solid fa-rainbow" style="font-size: 25px;"></i></div>
                        <div class='data'>
                            <p style="padding: 10px 0">Sunset</p>
                            <h3 id="sunset">18:55</h3>
                        </div>`;
  hDiv2.append(newDiv1, newDiv2, newDiv3, newDiv4, newDiv5, newDiv6);

  const hDiv3 = document.createElement("div");
  hDiv3.id = "hDiv3";
  hDiv3.className = "light-div";
  for (let i = 0; i < 5; i++) {
    const row = document.createElement("div");
    row.className = "completeDayInfo";
    row.innerHTML = `<div class='info'>
                        <div id="day-${i}">${weekday}</div>
                        <div id="date-${i}">${12 + i * 3}:30</div>
                     </div>
                     <div id="curTemp-${i}">32°C</div>`;
    hDiv3.append(row);
  }

  heroDiv.append(hDiv1, hDiv2, hDiv3);

  hero.append(headingHero, heroDiv);

  return hero;
};
