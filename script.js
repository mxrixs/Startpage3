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
    let Identifier;
    let Json;
    let Result = fetch('https://api.openweathermap.org/data/2.5/weather?id=2867714&appid=6fd57ceda43d5e2463dbe8d72e571bcd');
    then(
        Json = Result.json()
    )
    then(
        Identifier = Json.weather[0].description
    )
    if(Identifier == blabla){
        GetElementById("Weather.Icon").src = blabla.svg;
    }
    else if(Identifier == blablabla){
        GetElementById("Weather.Icon").src = blablabla.svg;
    }
    setInterval(clock, 600000);
}

weather();   
clock();