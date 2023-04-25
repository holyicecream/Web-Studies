const calendarMonthYear = document.getElementById('calendarMonthYear');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const daysContainer = document.querySelector('.days');
const agendaList = document.getElementById('agendaList');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Initialize the calendar on page load
renderCalendar(currentMonth, currentYear);

// Add event listeners to the previous and next month buttons
prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Render the calendar for a given month and year
function renderCalendar(month, year) {
  // Clear the previous month's days
  daysContainer.innerHTML = '';

  // Get the first day of the month and the number of days in the month
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Set the month and year in the header
  calendarMonthYear.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

  // Fill in the days of the month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const day = new Date(year, month, i);

    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;
    dayDiv.classList.add('day');

    // Highlight today's date
    if (day.toDateString() === currentDate.toDateString()) {
      dayDiv.classList.add('today');
    }

    // Add a click event listener to the day
    dayDiv.addEventListener('click', () => {
      // Display the day's agenda in the agenda list
      displayAgenda(day);
    });

    daysContainer.appendChild(dayDiv);
  }

  // Display the first day of the month in the correct weekday column
  const firstDayOfWeek = firstDay.getDay();
  daysContainer.style.gridTemplateColumns = `repeat(7, 1fr)`;
  daysContainer.style.gridTemplateRows = `repeat(${Math.ceil((lastDay.getDate() + firstDayOfWeek) / 7)}, 1fr)`;
  daysContainer.style.gridRowGap = '5px';
  daysContainer.style.gridColumnGap = '5px';
  daysContainer.style.gridRowStart = `${firstDayOfWeek + 1}`;

  // Display the agenda for the current day
  displayAgenda(currentDate);
}

// Display the agenda for a given day
function displayAgenda(date) {
  // Clear the previous day's agenda
  agendaList.innerHTML = '';

  // Generate a random number of agenda items
  const numAgendaItems = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < numAgendaItems; i++) {
    const agendaItem = document.createElement('li');
    agendaItem.textContent = `Agenda item ${i + 1} for ${date.toLocaleDateString()}`;
    agendaList.appendChild(agendaItem);
  }
}
