// from data.js
var tableData = data;



// APPEND TABLE DATA FROM DATA.JS FILE TO INDEX.JS

// Create reference to the <tbody> table body HTML element
var ufoTableBody = d3.select('#ufo-table').select('tbody');

// Loop through each logged sighting
tableData.forEach(ufoSighting => {
    // Add a new <tr> table row element
    var newRow = ufoTableBody.append('tr');
    // From array of key-value pairs, loop through each key-value pair
    Object.entries(ufoSighting).forEach(([key, value]) => {
        // Add new <td> table data element
        newRow.append('td').text(value);
    });
});



// CREATE EVENT TO FILTER ROWS BY USER DATE INPUT

// Create reference to the button that kicks off the filtering event
var filterButton = d3.select('#filter-btn');

// Create a 'click' event
filterButton.on('click', function() {

    // Clear all elements from <tbody>
    ufoTableBody.html('');

    // Create reference to all <input> elements
    var inputElements = d3.selectAll('.form-control');

    // Iterate through each <input> element and capture value property (user input) in an array
    inputsArray = [];
    inputElements.each(function() {
        var inputElement = d3.select(this);
        var inputValue = inputElement.property('value');
        inputsArray.push(inputValue);
    });

    // Create a subset of tableData where key-values match all user-selected inputs
    console.log(inputsArray);
    var filteredResults = tableData.filter(ufoSighting => {
        // For each filter, accept emptry string or matching user-selected input
        if ((inputsArray[0] === '' || ufoSighting.datetime === inputsArray[0]) &&
            (inputsArray[1] === '' || ufoSighting.city === inputsArray[1]) &&
            (inputsArray[2] === '' || ufoSighting.state === inputsArray[2]) &&
            (inputsArray[3] === '' || ufoSighting.country === inputsArray[3]) &&
            (inputsArray[4] === '' || ufoSighting.shape === inputsArray[4])) {
            return true;
        };
    });

    // Loop through each filtered sighting
    filteredResults.forEach(ufoSighting => {
        var newRow = ufoTableBody.append('tr');
        Object.entries(ufoSighting).forEach(([key, value]) => {
            newRow.append('td').text(value);
        });
    });
});