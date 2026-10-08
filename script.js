const clock = document.querySelector('#clock'), date = document.querySelector('#date');
function updateClock() {
  const now = new Date();
  clock.dateTime = now.toISOString();
  clock.textContent = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(now);
  date.textContent = new Intl.DateTimeFormat(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(now);
}
updateClock(); setInterval(updateClock, 1000);
