// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

button.on("click", function() {

    // Get datetime
    var datetime = d3.select("#datetime").property("value");
    
    // Filter data
    var filtered_data = tableData.filter(sighting => sighting.datetime == datetime)

    // Select table body
    var tbody = d3.select("tbody")

    // Delete old table rows
    tbody.html("")

    // Append filtered data
    filtered_data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
      

});
