// function to render, split between date and time
// Date
function renderTime(){
    var mydate = new Date();
    var year = mydate.getYear();
        if(year < 1000) {
            year+=1900
        }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    // daym stands for day of the month
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thuresday", "Friday", "Saturday");
    var montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");

// Time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h == 24) {
            h = 0;
        } else if(h > 12) {
            h = h - 0;
        }
        if(h < 10) {
            h = "0" + h;
        }
        if(m < 10) {
            m = "0" + m;
        }
        if(s < 10) {
            s = "0" + s; 
        }
        var currentDate = document.getElementById("mydate");
        currentDate.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ " " +s;
        currentDate.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ " " +s;
        setTimeout("renderTime()", 1000);
}
renderTime();
    // calls func.

renderToDo();
// grab from local storage
function renderToDo() {
    var task = localStorage.getItem(".todo");
}
// variables for event listener func & local storage func.
var saveButton = document.querySelector(".btn");
var todo = document.querySelector(".todo");

// event listener on save button
saveButton.addEventListener("click", function(event) {
    event.preventDefault();

// displaying content in placeholder??
    function displaytask(type, task) {
        todo.textContent = task;
        todo.setAttribute(".todo", type)
    }
    // saving input to local storage
    localStorage.setItem(".todo", type);

// recognising the time change
// colour change for time change
// Why do my functions lower down on the page prevent my date/time function from working?
