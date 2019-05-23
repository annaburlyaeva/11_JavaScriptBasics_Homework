// from data.js

var tbody = d3.select("tbody");

data.forEach((UFOsighting) => {
  var row = tbody.append("tr");
  Object.entries(UFOsighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the submit button
var filter_btn = d3.select("#filter-btn");

filter_btn.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(sighting => sighting.datetime == inputValue);

  console.log(filteredData);

    if (inputValue == "") {   
        var tbody = d3.select("tbody");
        tbody.selectAll("*").remove();    
        data.forEach((UFOsighting) => {
            var row = tbody.append("tr");
            Object.entries(UFOsighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
            });
    }
    else { 
        var tbody = d3.select("tbody");
        tbody.selectAll("*").remove();
        filteredData.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
        });
    }

});


