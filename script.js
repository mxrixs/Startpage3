function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    
    let time = `${hrs}:${mins}`;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText = time;
    }
    
    clock();
