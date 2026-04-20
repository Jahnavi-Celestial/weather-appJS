const checkWeatherLogic = (city) => {
    async function checkWeather(city){
    //   const res = await fetch(`/api/weather?city=${city}`)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=7f997ebe8fb5a607ff5a9b38d7d279d4`)

      if(res.status == 404){
        const errorDiv = document.createElement('div')
        errorDiv.className = 'light-div'
        errorDiv.id = 'error-div'
        errorDiv.innerHTML = `<p>Something went wrong. Please try again!</p>
                              <p id='closeBtn'>close</p>
                             `
        const header = document.querySelector('#header')
        header.insertAdjacentElement('afterend', errorDiv);
        setTimeout(()=>{
            errorDiv.style.display = "none";
        },5000)

        document.getElementById('closeBtn').addEventListener('click', ()=>{
           errorDiv.style.display = "none";
           document.querySelector("#locationIcon").style.pointerEvents = "auto"; 
        })
      }
      else{
        let data = await res.json()
        // console.log(data)

        document.querySelector('.temp').innerHTML = Math.round(data.list[0].main.temp) + "°C";
        document.querySelector('.city').innerHTML = data.city.name
        document.querySelector('.weather').innerHTML = data.list[0].weather[0].main

        const dateAndDay = new Date()
        const options = { 
            day: 'numeric', 
            month: 'long', 
        };
        const formattedDate = dateAndDay.toLocaleDateString('en-GB', options);
        const formattedDay = dateAndDay.toLocaleDateString('en-GB', {weekday: 'long'});
        document.querySelector('.date').innerHTML = formattedDate;
        document.querySelector('.day').innerHTML = formattedDay;

        document.querySelector('#speed').innerHTML = data.list[0].wind.speed + " km/h"
        document.querySelector('#humidity').innerHTML = data.list[0].main.humidity + " %"
        document.querySelector('#pressure').innerHTML = data.list[0].main.pressure + " hPa"
        document.querySelector('#visibility').innerHTML = data.list[0].visibility/1000 + " km"

        const sunrise = data.city.sunrise
        const sunRiseDate = new Date(sunrise * 1000)
        const sunRiseTime = sunRiseDate.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        })
        document.querySelector('#sunrise').innerHTML = sunRiseTime

        const sunset = data.city.sunset
        const sunSetDate = new Date(sunset * 1000)
        const sunSetTime = sunSetDate.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        })
        document.querySelector('#sunset').innerHTML = sunSetTime

        data.list.slice(0, 5).forEach((item, index) => {
            const DateDayTime = dateDayTimeLogic(item).long

            document.querySelector(`#day-${index}`).innerHTML = DateDayTime[2];
            document.querySelector(`#date-${index}`).innerHTML = DateDayTime[3];
            document.querySelector(`#curTemp-${index}`).innerHTML = Math.round(item.main.temp) + "°C";
        });


        const ans = []
        const dailyForecasts = data.list.filter(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString('en-US'); 
            if(!ans.includes(date)){
                ans.push(date)
                return true
            }
        });

        const allBtns = Array.from(document.querySelectorAll('.btns'))
        const dateButtons = allBtns.slice(1, 7);

        dailyForecasts.forEach((forecast, index) => {
            if (dateButtons[index]) {
                const DateDayTime = dateDayTimeLogic(forecast).short

                dateButtons[index].innerHTML = `${DateDayTime[0]} ${DateDayTime[1]} ${DateDayTime[2]}`;
            }
        })

        return data
      }
    }
    return checkWeather(city)
}