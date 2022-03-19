const todayDateTAg = document.getElementsByClassName("todayDate")[0];
const todayTimetag = document.getElementsByClassName("todayTime")[0];
const amPmTag = document.getElementById("ampm");
const nowDateTag = document.getElementById("nowDate");
const nowDayTag = document.getElementById("nowDay");
const nowMonthTag = document.getElementById("nowMonth");
const nowYearTag = document.getElementById("nowYear");


let topTime = new Date ();
let topHour = topTime.getHours();
let topMinute = topTime.getMinutes();


todayTimetag.innerHTML = topHour +" : "+ zeroAddRemove(topMinute) ;
if (topHour>12){
 topHour = 1;
 topHour ++;
 todayTimetag.innerHTML = topHour +" : "+ zeroAddRemove(topMinute) ;
}

/* for Am PM */
if (topHour===12){
amPmTag.innerHTML="PM"
}else {
  amPmTag.innerHTML="AM"
}



let footerToday = new Date();
let footerDay = footerToday.getDay();
let footerDate = footerToday.getDate();
let footerMonth = footerToday.getMonth();
let footerYear = footerToday.getFullYear();
// console.log(footerDay);

/* for footerDay Count */
if (footerDay === 1) {
  nowDayTag.innerHTML = "Monday";
} else if (footerDay === 2) {
  nowDayTag.innerHTML = "Tuesday";
} else if (footerDay === 3) {
  nowDayTag.innerHTML = "Wednesday";
}else if (footerDay === 4) {
  nowDayTag.innerHTML = "Thursday";
}else if (footerDay === 5) {
  nowDayTag.innerHTML = "Friday";
}else if (footerDay === 6) {
  nowDayTag.innerHTML = "Saturday";
}else {
  nowDayTag.innerHTML = "Sunday";
}

/* for footerMonth Count */
if ( footerMonth === 0) {
  nowMonthTag.innerHTML= "Jananuary";
} else if ( footerMonth === 1) {
  nowMonthTag.innerHTML= "February";
} else if (footerMonth === 2) {
  nowMonthTag.innerHTML= "March";
} else if (footerMonth === 3) {
  nowMonthTag.innerHTML= "April";
} else if (footerMonth === 4) {
  nowMonthTag.innerHTML= "May";
} else if (footerMonth === 5) {
  nowMonthTag.innerHTML= "June";
} else if (footerMonth === 6) {
  nowMonthTag.innerHTML= "July";
} else if (footerMonth === 7) {
  nowMonthTag.innerHTML= "August";
} else if (footerMonth === 8) {
  nowMonthTag.innerHTML= "September";
} else if (footerMonth === 9) {
  nowMonthTag.innerHTML= "October";
} else if (footerMonth === 10) {
  nowMonthTag.innerHTML= "November";
} else  {
  nowMonthTag.innerHTML= "December";
}


nowDateTag.innerHTML=footerDate;

nowYearTag.innerHTML = footerYear;




function countdown () {
  const newyear ="jan 1, 2023 00:00:00";
    const newYeardate = new Date (newyear);
    const currentDate = new Date();
    // console.log(currentDate)
    const daysTag = document.getElementById("days");
    const hoursTag = document.getElementById("hours");
    const minutesTag = document.getElementById("minutes");
    const secondsTag = document.getElementById("seconds");
    // console.log("calculating miliseconds",newYeardate - currentDate);
    const misecs = newYeardate - currentDate;

    // console.log(newYeardate)

    const totalsecs = (misecs / 1000);
    const seconds = Math.floor(totalsecs) % 60;
    const minutes = Math.floor((totalsecs/60)%60);
    const hours = Math.floor(totalsecs/3600)%24;
    const days = Math.floor((totalsecs/3600/24));
    

  // const secondDisplay    = (seconds < 10) ? "0" + seconds.toString(): seconds;
  // const minuteDisplay    = (minutes < 10) ? "0" + minutes.toString() : minutes;
  // const hourDisplay      = (hours < 10) ? "0" + hours.toString() : hours;
  // const dayDisplay       = (days < 10 )? "0" + days.toString() : days;

  

  daysTag.innerHTML= days;
  hoursTag.innerHTML=zeroAddRemove(hours);
  minutesTag.innerHTML=zeroAddRemove(minutes);
  secondsTag.innerHTML=zeroAddRemove(seconds);
  console.log(seconds,minutes,hours,days);

  
}

setInterval(() => {
    countdown()
}, 1000);

function zeroAddRemove (time){
  return (time < 10) ? "0" + time.toString(): time;
}

    // const newyearDiv = document.createElement('div');
    // newyearDiv.append="Happy News years!";
    // newyearDiv.classList.add("fallDownText");
    // document.body.append(newyearDiv);
    
