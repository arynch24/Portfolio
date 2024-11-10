const endDate = new Date("7 Nov, 2024 19:10:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const remainingTime = endDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
    const hours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

    // Populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    if(remainingTime < 0 ) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "COUNTDOWN OVER";
}
}


// Call the function every second
let x=setInterval(updateTimer, 1000);