var first = false;

function weather(){
    console.log("weather() has been called");
    var call = 'https://api.openweathermap.org/data/2.5/weather?id=2867714&appid=6fd57ceda43d5e2463dbe8d72e571bcd&units=metric';
    fetch(call).then(res => res.json).then(handler);
}
weather();

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
clock();

    
    
function handler(res){
    
    console.log("starting...");

    console.log(res);
    const identifier = res.weather[0].id;
    console.log(identifier);
    const temperature = json.main.temp;
    console.log(temperature);
    
    console.log("using if...");
    
    if(identifier == 200 || identifier == 201 || identifier == 202){
        document.GetElementById("Icon").src = "assets/icons/cloud-rain-lightning.svg";
    }
    else if(identifier == 210 || identifier == 211 || identifier == 212 || identifier == 221){
        document.GetElementById("Icon").src = "assets/icons/cloud-lightning.svg";
    }
    else if(identifier == 210 || identifier == 211 || identifier == 212 || identifier == 221){
        document.GetElementById("Icon").src = "assets/icons/cloud-lightning.svg";
    }
    else if(identifier == 230 || identifier == 231 || identifier == 232){
        document.GetElementById("Icon").src = "assets/icons/cloud-drizzle-lightning.svg";
    }
    else if(identifier == 300 || identifier == 301 || identifier == 302 || identifier == 310 || identifier == 311 || identifier == 312 || identifier == 313 || identifier == 314 || identifier == 321){
        document.GetElementById("Icon").src = "assets/icons/cloud-drizzle-lightning.svg";
    }
    else if(identifier == 500 || identifier == 501 || identifier == 520 || identifier == 521){
        document.GetElementById("Icon").src = "assets/icons/cloud-rain.svg";
    }
    else if(identifier == 502 || identifier == 503 || identifier == 504 || identifier == 520 || identifier == 521){
        document.GetElementById("Icon").src = "assets/icons/cloud-rain-2.svg";
    }
    else{
        document.GetElementById("Icon").src = "assets/icons/error.svg"
    }

    console.log("temp is...");

    document.getElementById("temperature").innertext = temperature + "°";
}