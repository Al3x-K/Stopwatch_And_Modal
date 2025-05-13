const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const infoBtn = document.querySelector(".fa-question");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

const paintBtn = document.querySelector(".fa-paint-brush");
const colorPanel = document.querySelector(".colors");
const colorOne = document.querySelector(".one");
const colorTwo = document.querySelector(".two");
const colorThree = document.querySelector(".three");
const colorFour = document.querySelector(".four");
let root = document.documentElement;


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
    ClearData(); 
}

const HandleReset = () => // Reset the stopwatch
{
    time.style.visibility = "hidden"; 
    timesArray = []; // Clear the times array
    ClearData(); // Clear the stopwatch and reset the display
}

const ClearData = () => 
{
   clearInterval(countTime);
    stopwatch.textContent = "0:00"; // Reset the stopwatch display
    timeList.textContent = ""; // Clear the time list
    minutes = 0; 
    seconds = 0; 
}

const ShowHistory = () => // Show the history of times
{
    timeList.textContent = ""; // Clear the time list
    let num = 1;
    timesArray.forEach(time =>
    {
        const newTime = document.createElement("li"); // Create a new list item
        newTime.innerHTML = `Time number ${num}: <span>${time}</span>`;
        timeList.appendChild(newTime); 
        num++;
    });
}

const ShowModal = () => // Show the modal
{
    if(modalShadow.style.display === "block") // If the modal is already open, close it
    {
        modalShadow.style.display = "none"; 
        return;
    }
    else // Otherwise, open the modal
    {
        modalShadow.style.display = "block"; 
    }

    modalShadow.classList.toggle('modal-animation'); // Add the fade-in class to the modal shadow
}



startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);// Stop the stopwatch
resetBtn.addEventListener("click", HandleReset);
historyBtn.addEventListener("click", ShowHistory); // Show the history of times

infoBtn.addEventListener("click", ShowModal); // Show the modal
closeModalBtn.addEventListener("click", ShowModal); // Close the 

window.addEventListener("click", e => e.target === modalShadow ? ShowModal() : false); // Close the modal when clicking outside of it

paintBtn.addEventListener("click", () => 
{
    colorPanel.classList.toggle("show-colors"); // Toggle the color panel
});

colorOne.addEventListener("click", () => // Change the color to the first color
{
    root.style.setProperty("--first-color", "rgb(250, 124, 6)"); // Change the main color to red
    root.style.setProperty("--hover-color", "rgb(161, 81, 5)"); // Change the hover color to red
});

colorTwo.addEventListener("click", () => // Change the color to the first color
{
    root.style.setProperty("--first-color", "rgb(6, 173, 250)"); // Change the main color to red
    root.style.setProperty("--hover-color", "rgb(6, 173, 250)"); // Change the hover color to red
});

colorThree.addEventListener("click", () => // Change the color to the first color
{
    root.style.setProperty("--first-color", "rgb(0, 224, 43)"); // Change the main color to red
    root.style.setProperty("--hover-color", "rgb(0, 255, 42)"); // Change the hover color to red
});

colorFour.addEventListener("click", () => // Change the color to the first color
{
    root.style.setProperty("--first-color", "rgb(232, 85, 200)"); // Change the main color to red
    root.style.setProperty("--hover-color", "rgb(161, 61, 139)"); // Change the hover color to red
});