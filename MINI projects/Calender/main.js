const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const year = document.getElementById("year-number");

const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

const date = new Date();
// monthName.innerHTML=month[date.getMonth()];
monthName.innerHTML = date.toLocaleString("en",{
    month:"long"
});
dayName.innerHTML=day[date.getDay()];
dayNum.innerHTML=date.getDate();
year.innerHTML=date.getFullYear();

