function addEvent() {
    // Get values from form inputs
    var date = document.getElementById("date").value;
    var event = document.getElementById("event").value;
  
    // Add the new event to the table
    var table = document.getElementById("events");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = date;
    cell2.innerHTML = event;
  }