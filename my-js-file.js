function myFunction() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

const getCurrentTimeDate = () => {
	  let currentTimeDate = new Date();
    var weekday = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    var month = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
    var hours = currentTimeDate.getHours();
    var minutes = currentTimeDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes: minutes;
    var currentTime = `${hours}:${minutes}`;
    var currentDay = weekday[currentTimeDate.getDay()];
    var currentDate = currentTimeDate.getDate();
    var currentMonth = month[currentTimeDate.getMonth()];
    var CurrentYear = currentTimeDate.getFullYear();
    var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;
    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("day").innerHTML = currentDay;
    document.getElementById("date").innerHTML = fullDate;
    setTimeout(getCurrentTimeDate, 1000);	
}

window.onload = function () {
  myFunction();  
  getCurrentTimeDate();
};
