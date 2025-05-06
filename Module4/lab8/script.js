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

 //2 Display the number of years, months, and days between your birthdate and current date
(function () {
    const DateTime = luxon.DateTime;

    const birthDate = DateTime.fromFormat("05/09/1997", "MM/dd/yyyy");
    const currentDate = DateTime.fromFormat("05/05/2025", "MM/dd/yyyy");

    // Calculate the difference between the two dates specifically in years, months, and days
    const diff = currentDate.diff(birthDate, ['years', 'months', 'days']).toObject(); 

    const result = `Difference: ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days`;
    
    document.getElementById("displayLuxon").innerHTML = result; // Result to page is 'Difference: 27 years, 11 months, and 26 days'
})();