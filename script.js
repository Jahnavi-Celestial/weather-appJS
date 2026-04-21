applyStyles();

const root = document.getElementById("root");

root.append(
  headerSection(),
  heroSection(),
  nextForecastSection(),
  footerSection(),
);

let locationIcon = document.querySelector("#locationIcon");
locationIconLogic(locationIcon);

let theme = document.querySelector("#theme");
themeLogic(theme);

let gitDiv = document.querySelector("#git");
gitLogic(gitDiv);

let inputBox = document.querySelector("#input-box");
inputLogic(inputBox);

buttonsLogic();

let fDiv3 = document.querySelector("#scrollToTop");
scrollToTopLogic(fDiv3);

let curDate = new Date();
for (let i = 1; i <= 6; i++) {
  const day = curDate.getDate();
  const month = curDate.toLocaleDateString("en-US", { month: "short" });
  const weekday = curDate.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const curDiv = document.getElementById(`btnDiv${i + 1}`);
  curDiv.innerHTML = `${day} ${month} ${weekday} `;

  // console.log(curDate.getDate())
  curDate.setDate(curDate.getDate() + 1);
}

let nextDate = new Date();
for (let i = 0; i < 40; i++) {
  const day = nextDate.getDate();
  const month = nextDate.toLocaleDateString("en-US", { month: "short" });
  const weekday = nextDate.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const curDiv = document.getElementById(`leftDate${i + 1}`);
  curDiv.innerHTML = `${day} ${month} ${weekday}`;

  // Move to next date after every 3 repeats
  if ((i + 1) % 8 === 0) {
    nextDate.setDate(nextDate.getDate() + 1);
  }
}

// ---- api fetch -----

//input logic

//scroll to top

//buttons logic

//------ date and day and time ------

//------ dynamic divs ------
