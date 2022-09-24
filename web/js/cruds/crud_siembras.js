// CREATE

// READ
window.onload = function() {
    eel.select("siembras")(fill_table);
}
function fill_table(output) {
    json_list = JSON.parse(output);
    string = "<tr><th>Id siembra</th><th>Id vereda</th><th>Id arbol</th><th>Id contratista</th><th>Fecha</th><th>Total árboles</th><th>Total hectáreas</th></tr>";
    json_list.forEach(row => string = string.concat("<tr><td>", row[0], "</td><td>", row[1], "</td><td>", row[2], "</td><td>", row[3], "</td><td>", row[4], "</td><td>", row[5], "</td><td>", row[6], "</td></tr>"));
    document.getElementById("data").innerHTML = string;
}
// UPDATE

// DELETE