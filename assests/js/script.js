var APIKey = "6ca00c96086f0d7b51b20c43a0040592";
var cityFormEl = document.querySelector('#city-form');
var cityInputEl = document.querySelector('#city');

var city = 'Detroit';
var selectCity = function(){
    var  queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ APIKey;
    fetch(queryURL).then(function(response){
        response.json().then(function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.main.temp);
            console.log(data.wind.speed);
            console.log(data.main.humidity);
        })
    });

}
//add weather data to html
// renderWeather(){

// }

var citySubmit = function (event) {
    event.preventDefault();

    // var city = 'Detroit';

    if (city) {
        console.log(city);
    } else {
        alert('Please enter a City!')
    }

    selectCity();
}

cityFormEl.addEventListener('submit', citySubmit);