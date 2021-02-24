function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    
    let time = `${hrs}:${mins}`;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText = time;
    }

function weather(){
    var Identifier;
    var Json;
    var Result;
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2867714&appid=6fd57ceda43d5e2463dbe8d72e571bcd')
    .then(  
        Json = Result.json()
    )
    Identifier = Json.weather[0].description;
    if(Identifier == blabla){
        GetElementById("Weather.Icon").src = blabla.svg;
    }
    else if(Identifier == blablabla){
        GetElementById("Weather.Icon").src = blablabla.svg;
    }
    setInterval(weather, 600000);
}

weather();   
clock();