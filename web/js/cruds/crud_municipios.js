// CREATE
document.querySelector(".crud_create").onclick = function (){ 
    console.log('create');
    mun_name = document.getElementById("create_mun_name");
    eel.create("municipios",mun_name.value);
    location.reload();
    // document.getElementById("p_create").innerHTML = "Agregado exitosamente";
}  

// READ
window.onload = function () {
    eel.select("municipios")(get_data);
}
function get_data(output){
    console.log("read");
    json_list = JSON.parse(output);
    string_table = "<tr><th>Id municipio</th><th>Nombre del municipio</th></tr>";
    string_select = "<option disabled selected value style='color:gray'></option>";
    json_list.forEach(row => string_table = string_table.concat("<tr><td>", row[0], "</td>", "<td>", row[1] ,"</td></tr>"));
    json_list.forEach(row => string_select = string_select.concat("<option value='", row[0], "'>", row[0], " - ", row[1], "</option>"));
    document.getElementById("data").innerHTML = string_table;
    document.getElementById("update_mun_id").innerHTML = string_select;
}
// function print_table() {

// }

//UPDATE
document.querySelector(".crud_update").onclick = function (){ 
    console.log('update');
    id_mun = document.getElementById("update_mun_id");
    new_name = document.getElementById("update_mun_name");
    args = [id_mun.value, new_name.value];
    eel.update("municipios", args);
    location.reload();
} 

//DELETE
// document.querySelector(".crud_delete").onclick = function (){ 
//     console.log('delete');
// }  




