let places;
function getDetails() {
  places = document.getElementById("places").value;
  // console.log(places);
  splitPlaces(places);
}

function splitPlaces(places) {
  let placeArr = places.split(",").map((ele) => ele.trim());
  console.log(placeArr);
  getAllData(placeArr);
}

function getAllData(arr) {
  let allForecast = ``;

  arr.forEach((element) => {

    let url = `http://api.weatherapi.com/v1/current.json?key=aef54d40b58b45a48f7165549221408&q=${element}&aqi=no`;

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        allForecast += `
            <div class="card" style="width: 18rem; margin: 10px;">
            <img src="https:${data.current.condition.icon}" class="card-img-top" alt="${data.current.condition.code}" style="width: 100px;height: 100px;">
            <div class="card-body">
            <h5 class="card-title">Tempreture: ${data.current.temp_c} C°</h5>
            <p class="card-text">${data.location.name}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Condition: ${data.current.condition.text}</li>
            <li class="list-group-item">Region: ${data.location.region}</li>
            <li class="list-group-item">Country: ${data.location.country}</li>
            </ul>
            </div>`;
        document.getElementById('weatherCards').innerHTML = allForecast;
        // console.log(allForecast);
      });
  });
//   document.getElementById('weatherCards').innerHTML = allForecast;

}
