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
        var call = 'https://api.openweathermap.org/data/2.5/weather?id=2867714&appid=6fd57ceda43d5e2463dbe8d72e571bcd';
        fetch(call).then(handler)
        setInterval(weather, 600000);
    }
    
    
 function handler(res){
      var identifier;
      var json;
       
       json = res.json();
       Identifier = json.weather[0].description

    if(identifier == bla){
        GetElementById("Weather.Icon").src = "assets/icons/flag.svg";
    }
    else{
         GetElementById("Weather.Icon").src = "assets/icons/snow.svg";
     }
}

clock();
weather();
   
