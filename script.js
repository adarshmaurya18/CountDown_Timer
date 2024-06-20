const days1 = document.getElementById('days')
const hours1 = document.getElementById('hours')
const minutes1 = document.getElementById('minutes')
const second1 = document.getElementById('second')
const newYear = '1 Jan 2025';
function countDown(){
    const currDate = new Date();
    const newYearsDate = new Date(newYear)
    const seconds = (newYearsDate - currDate) / 1000;
    const days = Math.floor(seconds / 3600 / 24 );
    const hours = Math.floor(seconds/ 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const sec  = Math.floor(seconds) % 60 ; 

     days1.innerHTML = days
     hours1.innerHTML = formatTime(hours)
     minutes1.innerHTML = formatTime(minutes)
     second1.innerHTML = formatTime(sec)
}
function formatTime(time)
{
    return time<10 ? `0${time}` : time;
}
countDown();

setInterval(countDown , 1000);



