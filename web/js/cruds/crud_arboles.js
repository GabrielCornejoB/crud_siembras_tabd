// CREATE

// READ
window.onload = function() {
    eel.select("arboles")(fill_table);
}
function fill_table(output) {
    json_list = JSON.parse(output);
    string = "<tr><th>Id arbol</th><th>Variedad árbol</th></tr>";
    json_list.forEach(row => string = string.concat("<tr><td>", row[0], "</td><td>", row[1], "</td></tr>"));
    document.getElementById("data").innerHTML = string;
}

// UPDATE

// DELETE