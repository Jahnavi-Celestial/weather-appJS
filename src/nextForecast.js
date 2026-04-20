const nextForecastSection = () => {
  const nextForecast = document.createElement("div");
  nextForecast.id = "nextForecastDiv";

  const headingForecast = document.createElement("h1");
  headingForecast.id = "heading-forecast";
  headingForecast.innerHTML = `Next 5 Days`;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.id = "buttonsDiv";

  const btnDiv1 = document.createElement("div");
  btnDiv1.id = "btnDiv1";
  btnDiv1.className = "light-div btns active";
  btnDiv1.innerHTML = "All Days";

  const btnDiv2 = document.createElement("div");
  btnDiv2.id = "btnDiv2";
  btnDiv2.className = "light-div btns";
  btnDiv2.innerHTML = "18 Apr Sat";

  const btnDiv3 = document.createElement("div");
  btnDiv3.id = "btnDiv3";
  btnDiv3.className = "light-div btns";
  btnDiv3.innerHTML = "19 Apr Sun";

  const btnDiv4 = document.createElement("div");
  btnDiv4.id = "btnDiv4";
  btnDiv4.className = "light-div btns";
  btnDiv4.innerHTML = "20 Apr Mon";

  const btnDiv5 = document.createElement("div");
  btnDiv5.id = "btnDiv5";
  btnDiv5.className = "light-div btns";
  btnDiv5.innerHTML = "21 Apr Tue";

  const btnDiv6 = document.createElement("div");
  btnDiv6.id = "btnDiv6";
  btnDiv6.className = "light-div btns";
  btnDiv6.innerHTML = "22 Apr Wed";

  const btnDiv7 = document.createElement("div");
  btnDiv7.id = "btnDiv7";
  btnDiv7.className = "light-div btns";
  btnDiv7.innerHTML = "23 Apr Thur";

  buttonsDiv.append(
    btnDiv1,
    btnDiv2,
    btnDiv3,
    btnDiv4,
    btnDiv5,
    btnDiv6,
    btnDiv7,
  );

  const dataDiv = document.createElement("div");
  dataDiv.id = "dataDiv";

  for (let i = 0; i < 40; i++) {
    let curDiv = document.createElement("div");
    curDiv.id = `curDiv${i}`;
    curDiv.className = "curDiv light-div";

    // let DateDayTime = dateDayTimeLogic(item).short;

    let leftData = document.createElement("div");
    leftData.innerHTML = `<p>20 Apr Mon</p>
                                  <h4>11:30</h4>`;

    let rightData = document.createElement("div");
    rightData.className = "right-data";
    rightData.innerHTML = `<i class="fa-solid fa-cloud-moon" style="font-size: 25px;"></i>
                                   <div>
                                       <h4>32°C</h4>
                                       <p>clear</p>
                                   </div>`;

    curDiv.append(leftData, rightData);
    dataDiv.append(curDiv);
  }

  nextForecast.append(headingForecast, buttonsDiv, dataDiv);

  return nextForecast;
};
