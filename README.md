# Digital_Clock
## Date: 10/7/2025
## Objective:
To create a live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels.

## Tasks:

#### 1. Create the HTML Structure:
Use a ```<div>``` with an ID like clock to hold the time display.

Add a page title like ```<h1>TimeTrack</h1>```.

Optionally, include a subtitle like “Live Digital Clock”.

#### 2. Style the Clock with CSS:
Center the clock using flexbox or text-align: center.

Use a large font size (e.g., font-size: 48px) for the clock display.

Style with a dark background and light-colored text for contrast.

Use padding, border-radius, and box-shadow for a modern look.

#### 3. Add JavaScript Functionality:
Create a function that gets the current time using new Date().

Extract hours, minutes, and seconds from the date object.

Format them to two digits using .padStart(2, "0").

Update the inner text of the clock div every second using setInterval().

#### 4. Enhancements:
Display AM/PM next to the time.

Add the current date below the time.

Let the user choose between 12-hour and 24-hour formats.

Animate the colon (:) blinking every second.

Add a “Tweet this” button with a share link.
## HTML Code:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TimeTrack - Digital Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>TimeTrack</h1>
        <p class="subtitle">Live Digital Clock</p>
        
        <div class="clock-container">
            <div id="clock">00:00:00</div>
            <div id="date"></div>
        </div>
        
        <div class="controls">
            <button id="formatBtn">Switch to 12-hour</button>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

## CSS Code:
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    text-align: center;
    color: white;
}

h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.clock-container {
    background: rgba(0, 0, 0, 0.7);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
}

#clock {
    font-size: 4rem;
    font-weight: bold;
    color: #00ff88;
    text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
    margin-bottom: 20px;
    font-family: 'Courier New', monospace;
}

#date {
    font-size: 1.5rem;
    color: #ffffff;
    opacity: 0.8;
}

.controls {
    margin-top: 20px;
}

#formatBtn {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

#formatBtn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.blink {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.3; }
}

@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    
    #clock {
        font-size: 2.5rem;
    }
    
    .clock-container {
        padding: 30px 20px;
    }
}
```

## JS code:
```
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
```


## Output:

<img width="1365" height="648" alt="image" src="https://github.com/user-attachments/assets/eb6fe997-262c-43fa-9462-27b9e28f03c7" />


## Result:
A live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels is created successfully.
