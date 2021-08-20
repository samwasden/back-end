document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

const addressBar = document.getElementById("addressBar")
let searchAddress = document.getElementById('inputAddress')
addressBar.onsubmit = function (e) {
    e.preventDefault()
    let options = {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: {address: searchAddress.value, language: 'en'},
        headers: {
        'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
        'x-rapidapi-key': '81437800c2mshb55f3ce5a0c7b25p17c6d8jsn568bd8ccb552'
        }
    };
    axios.request(options).then((res) => {
        let {geometry} = res.data.results[0]
        let {lat, lng} = geometry.location
        let location = `${lat},${lng}`
        let apikey = 'RKpFg8HLj5Wr5nH9NTClVOHt0ILtA8AT'
        const fields = "precipitationType,temperature,cloudCover";
        const units = "imperial";
        const timesteps = "current";
        const now = moment.utc();
        const startTime = moment.utc(now).add(0, "minutes").toISOString();
        const endTime = moment.utc(now).add(1, "minutes").toISOString();
        let options2 = {
            method: 'GET',
            url: 'https://data.climacell.co/v4/timelines',
            params: {
                apikey,
                location,
                fields,
                units,
                timesteps,
                startTime,
                endTime
            }
        }
        axios.request(options2).then((res) => {
            let {timelines} = res.data.data
            let {intervals} = timelines[0]
            let {precipitationType, temperature, cloudCover} = intervals[0].values
            let precipitation = ["there is no precipitation", "it is raining", "it is snowing", "there is freezing rain", "there are ice pellets falling"]
            let weatherDisplay = document.getElementById("box2")
            let newLine = document.createElement("h1")
            newLine.textContent = `In your location it is currently ${temperature} degrees, there is ${cloudCover}% could cover and ${precipitation[precipitationType]} right now.`
            weatherDisplay.appendChild(newLine)


        })
    })
    };

document.getElementById("form2").onsubmit = function (e) {
    e.preventDefault()
    let color1 = document.getElementById("color1").value
    let color2 = document.getElementById("color2").value
    console.log("departing")
    axios.get(`http://localhost:4000/api/background`).then((res) => {
        let {deg} = res.data
        let body = document.querySelector('body')
        body.style.background = `linear-gradient(${deg}deg, ${color1}, ${color2})`
    })

}
