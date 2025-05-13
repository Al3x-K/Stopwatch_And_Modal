const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const infoBtn = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");


let countTime;
let minutes = 0;
let seconds = 0;

let timesArray = []; // Array to store the times

const handleStart = () => // Start the stopwatch
{
    clearInterval(countTime); // Clear any existing interval
    countTime = setInterval(() => // Update the stopwatch every second
    {
        if(seconds <9)
        {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`; 
        }
        else if(9 <= seconds && seconds < 59)
        {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`; 
        }
        else
        {
            seconds = 0;
            minutes++;
            stopwatch.textContent = `${minutes}:00`; 
        }

    }, 1000);
}

const handlePause = () => // Pause the stopwatch
{
    clearInterval(countTime); // Clear the interval to pause the stopwatch
}

const handleStop = () => // Stop the stopwatch
{
    time.innerHTML = `Last time: ${stopwatch.textContent}`; // Show the last time
    if(stopwatch.textContent !== "0:00") // If the stopwatch is already stopped, do nothing
    {
        time.style.visibility = "visible"; // Show the time list
        timesArray.push(stopwatch.textContent); 
    }
    clearInterval(countTime);
    stopwatch.textContent = "0:00"; // Reset the stopwatch display
    timeList.textContent = ""; // Clear the time list
    minutes = 0; 
    seconds = 0; 

    
}

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);// Stop the stopwatch