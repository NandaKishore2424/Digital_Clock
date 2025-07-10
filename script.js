let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    let ampm = '';
    
    if (!is24HourFormat) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
    }
    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}${ampm}`;
    
    document.getElementById('clock').textContent = timeString;
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    const btn = document.getElementById('formatBtn');
    btn.textContent = is24HourFormat ? 'Switch to 12-hour' : 'Switch to 24-hour';
}

function addBlinkingEffect() {
    const clockElement = document.getElementById('clock');
    setInterval(() => {
        const colons = clockElement.textContent.match(/:/g);
        if (colons) {
            clockElement.classList.toggle('blink');
        }
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    setInterval(updateClock, 1000);
    
    document.getElementById('formatBtn').addEventListener('click', toggleFormat);
    
    addBlinkingEffect();
});