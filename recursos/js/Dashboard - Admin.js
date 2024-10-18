document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById('calendar');
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    function renderCalendar(month, year) {
        let firstDay = new Date(year, month).getDay();
        let daysInMonth = 32 - new Date(year, month, 32).getDate();

        let calendarHTML = `
            <table>
                <tr>
                    <th class="prev" onclick="prevMonth()">&#10094;</th>
                    <th colspan="5">${months[month]} ${year}</th>
                    <th class="next" onclick="nextMonth()">&#10095;</th>
                </tr>
                <tr>
                    <th>Dom</th>
                    <th>Lun</th>
                    <th>Mar</th>
                    <th>Mié</th>
                    <th>Jue</th>
                    <th>Vie</th>
                    <th>Sáb</th>
                </tr>
        `;

        let date = 1;
        for (let i = 0; i < 6; i++) {
            calendarHTML += "<tr>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    calendarHTML += "<td></td>";
                } else if (date > daysInMonth) {
                    break;
                } else {
                    if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                        calendarHTML += `<td class="today">${date}</td>`;
                    } else {
                        calendarHTML += `<td>${date}</td>`;
                    }
                    date++;
                }
            }
            calendarHTML += "</tr>";
        }

        calendarHTML += "</table>";
        calendar.innerHTML = calendarHTML;
    }

    window.prevMonth = function() {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
        renderCalendar(currentMonth, currentYear);
    }

    window.nextMonth = function() {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
        renderCalendar(currentMonth, currentYear);
    }

    renderCalendar(currentMonth, currentYear);
});

document.querySelector('.verDashboard').addEventListener('click', function() {
    const dashboard = document.querySelector('.sidebar');
    
    // Toggle entre 'none' y 'flex' (o 'block', según tu diseño)
    if (dashboard.style.display === 'none' || dashboard.style.display === '') {
        dashboard.style.display = 'flex'; // O 'block' según lo que necesites
    } else {
        dashboard.style.display = 'none';
    }
});