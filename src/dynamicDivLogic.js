const dynamicDivLogic = (data) => {
  function dynamicDiv(data) {
    const activeBtn = document.querySelector(".active");

    if (activeBtn.innerText == "All Days") {
      dataDiv.innerHTML = "";
      data.list.forEach((item, index) => {
        let curDiv = document.createElement("div");
        curDiv.id = `curDiv${index}`;
        curDiv.className = "curDiv light-div";

        let DateDayTime = dateDayTimeLogic(item).short;

        let leftData = document.createElement("div");
        leftData.innerHTML = `<p>${DateDayTime[0]} ${DateDayTime[1]} ${DateDayTime[2]}</p>
                                  <h4>${DateDayTime[3]}</h4>`;

        let rightData = document.createElement("div");
        rightData.className = "right-data";
        rightData.innerHTML = `<i class="fa-solid fa-cloud-moon-rain" style="font-size: 25px;"></i>
                                   <div style="padding-left: 1rem;">
                                       <h4>${Math.round(item.main.temp)}°C</h4>
                                       <p>${item.weather[0].main}</p>
                                   </div>`;

        curDiv.append(leftData, rightData);
        dataDiv.append(curDiv);
      });
    } else {
      dataDiv.innerHTML = "";
      const filteredData = data.list.filter((item) => {
        let DateDayTime = dateDayTimeLogic(item).short;

        const dateData = `${DateDayTime[0]} ${DateDayTime[1]} ${DateDayTime[2]}`;

        if (activeBtn.innerText == dateData) {
          return true;
        }
      });

      filteredData.forEach((item, index) => {
        let curDiv = document.createElement("div");
        curDiv.id = `curDiv${index}`;
        curDiv.className = "curDiv light-div";

        let DateDayTime = dateDayTimeLogic(item).short;

        let leftData = document.createElement("div");
        leftData.innerHTML = `<p>${DateDayTime[0]} ${DateDayTime[1]} ${DateDayTime[2]}</p>
                                  <h4>${DateDayTime[3]}</h4>`;

        let rightData = document.createElement("div");
        rightData.className = "right-data";
        rightData.innerHTML = `<i class="fa-solid fa-cloud-moon-rain" style="font-size: 25px;"></i>
                                   <div style="padding-left: 1rem;">
                                       <h4>${Math.round(item.main.temp)}°C</h4>
                                       <p>${item.weather[0].main}</p>
                                   </div>`;

        curDiv.append(leftData, rightData);
        dataDiv.append(curDiv);
      });
    }
  }
  dynamicDiv(data)
};
