function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // convert to 12-hours format
    hours = hours % 12 || 12;

    // Add lead zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;

    // This updates the date...
    let day = now.getDate();
    let month = now.toLocaleString('default', {month: 'long'});
    let year = now.getFullYear();
    let weekday = now.toLocaleString('default', {weekday: 'long'});

    document.getElementById('date').textContent = `${weekday} - ${month} - ${day} - ${year}.`;
}

// This updates the clock...
setInterval(updateClock, 1000);
updateClock();

