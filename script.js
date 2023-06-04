setInterval(myDigitalClock, 1000);

function myDigitalClock() {
  const d = new Date();
  document.getElementById('mydigitalclock').innerHTML = d.toLocaleTimeString();
}