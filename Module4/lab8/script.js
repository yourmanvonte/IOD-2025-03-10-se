 // 1) Calculate the number of days between two date using Luxon
(function () { 
    const DateTime = luxon.DateTime;

    const birthDate = DateTime.fromFormat("05/09/1997", "MM/dd/yyyy");
    const currentDate = DateTime.now();

    const daysDiff = currentDate.diff(birthDate, "days").days;

    //Math.floor() is used to round down partial values for clarity
    const result = `Number of days between ${Math.floor(daysDiff)} days`;

    document.getElementById("displayLuxon").innerHTML = result; // Result of 10223 is printed to the page
 })();

 // 2 Display the number of years, months, and days between your birthdate and current date
(function () {
    const DateTime = luxon.DateTime;

    const birthDate = DateTime.fromFormat("05/09/1997", "MM/dd/yyyy");
    const currentDate = DateTime.fromFormat("05/05/2025", "MM/dd/yyyy");

    // Calculate the difference between the two dates specifically in years, months, and days
    const diff = currentDate.diff(birthDate, ['years', 'months', 'days']).toObject(); 

    const result = `Difference: ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days`;
    
    document.getElementById("displayLuxon").innerHTML = result; // Result to page is 'Difference: 27 years, 11 months, and 26 days'
})();

// 3 Given two dates, display the date closest to the current date
(function() {
    const { DateTime } = luxon;
    
    // Example dates to be replaced
    const date1 = DateTime.fromISO('2025-05-10');
    const date2 = DateTime.fromISO('2025-04-25');

    // Gets current date
    const now = DateTime.now();

    // Calculates the absolute difference
    const diff1 = Math.abs(date1.diff(now).milliseconds);
    const diff2 = Math.abs(date2.diff(now).milliseconds);

    // Ternary condition the displays the closest date
    const closestDate = diff1 < diff2 ? date1: date2;
    console.log('Closest date to now is:', closestDate.toISODate());

    // Displays the result in the browser
    const result = `Closest date to now is: ${closestDate.toISODate()}`;
    document.getElementById("displayLuxon").innerHTML = result; // Displayed result is 'Closest date to now is: 2025-04-25'
})();

// 4 Given two dates, display the date furthest from the current date
(function() {
    const { DateTime } = luxon;
    
    // Example dates to be replaced
    const date1 = DateTime.fromISO('2025-05-10');
    const date2 = DateTime.fromISO('2025-04-25');

    // Gets current date
    const now = DateTime.now();

    // Calculates the absolute difference
    const diff1 = Math.abs(date1.diff(now).milliseconds);
    const diff2 = Math.abs(date2.diff(now).milliseconds);

    // Ternary condition the displays the furthest date
    const furthestDate = diff1 > diff2 ? date1: date2;
    console.log('Furthest date from now is:', furthestDate.toISODate());

    // Displays the result in the browser
    const result = `Furthest date from now is: ${furthestDate.toISODate()}`;
    document.getElementById("displayLuxon").innerHTML = result; // Displayed result is 'Furthest date from now is: 2020-04-25
})();

// 5 Display the current time in London
(function() {
    const { DateTime } = luxon;

    // Gets the current date and time in London
    const londonTime = DateTime.now().setZone('Europe/London').toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    console.log('Current time in London:', londonTime);

    const result = `Current time in London: ${londonTime}`;
    document.getElementById("displayLuxon").innerHTML = result; // Displayed result is 'Current time in London: 2025-05-05, 12:00:00 PM'
})();