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

    // Create reference to <input> element and capture value property (user input)
    var inputElement = d3.select('.form-control');
    var inputValue = inputElement.property('value');

    // Create a subset of tableData where dates match user-selected date
    var filteredResults = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

    // Loop through each filtered sighting
    filteredResults.forEach(ufoSighting => {
        var newRow = ufoTableBody.append('tr');
        Object.entries(ufoSighting).forEach(([key, value]) => {
            newRow.append('td').text(value);
        });
    });
});

