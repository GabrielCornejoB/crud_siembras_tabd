// CREATE

// READ
window.onload = function() {
    eel.select("veredas")(get_data);
}
function get_data(output) {
    console.log("read");
    json_list = JSON.parse(output);
    string_table = "<tr><th>Id vereda</th><th>Nombre vereda</th><th>Id municipio</th></tr>";
    json_list.forEach(row => string_table = string_table.concat("<tr><td>", row[0], "</td><td>", row[1], "</td><td>", row[2],"</td></tr>"));
    document.getElementById("data").innerHTML = string_table;
    search_muns();
}
function search_muns() {
    console.log("searh_muns");
    eel.select("municipios")(change_selects);
}
function change_selects(output) {
    console.log("change_selects");
    json_list = JSON.parse(output);
    string_select = "<option disables selected value style='color:gray'></option>";
    json_list.forEach(row => string_select = string_select.concat("<option value='", row[0], "'>", row[0], " - ", row[1], "</option>"));
    document.getElementById("create_mun").innerHTML = string_select;
    document.getElementById("update_mun").innerHTML = string_select;
}

// UPDATE

// DELETE