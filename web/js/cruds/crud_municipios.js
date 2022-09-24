// Limpiar inputs
function clean_inputs() {
    inputs = document.getElementsByClassName("crud_input");
    selects = document.getElementsByClassName("crud_select");
    for (let i of inputs) { i.value = ""; }
    for (let s of selects) { s.value = ""; }
}
// Actualizar tablas
function update_table() {
    eel.select("municipios")(get_data);
}
function clean_msgs() {
    ps = document.getElementsByClassName("p_msg");
    for (let p of ps) { p.innerHTML = ""; }
}

// CREATE
document.querySelector(".crud_create").onclick = function (){ 
    console.log('create');
    crete_mun_name = document.getElementById("create_mun_name");
    clean_msgs();
    if(!create_mun_name.value) {                    // null, empty, undefined...
        document.getElementById("create_err").innerHTML = "¡La entrada no puede estar vacía!".toUpperCase();
    }
    else if(create_mun_name.value.length < 3) {     // string too short
        document.getElementById("create_err").innerHTML = "¡La entrada debe tener al menos 3 cáracteres!".toUpperCase();
    }
    else {
        eel.create("municipios",create_mun_name.value);
        update_table();
        document.getElementById("create_suc").innerHTML = "¡Agregado exitosamente!";
    }
    clean_inputs();
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
    document.getElementById("delete_mun_id").innerHTML = string_select;
}

//UPDATE
document.querySelector(".crud_update").onclick = function (){ 
    console.log('update');
    update_id_mun = document.getElementById("update_mun_id");
    update_new_name = document.getElementById("update_mun_name");
    update_args = [update_id_mun.value, update_new_name.value];
    clean_msgs();
    if(!update_args[0] || !update_args[1]){
        document.getElementById("update_err").innerHTML = "¡Tiene campos vacíos!".toUpperCase();
    }
    else if(update_args[1].length < 3) {
        document.getElementById("update_err").innerHTML = "¡La entrada debe tener al menos 3 cáracteres!".toUpperCase();
    }
    else {
        eel.update("municipios", update_args);
        update_table();
        document.getElementById("update_suc").innerHTML = "¡Editado exitosamente!";
    }
    clean_inputs();
} 

//DELETE
document.querySelector(".crud_delete").onclick = function (){ 
    console.log('delete');
    delete_id_mun = document.getElementById("delete_mun_id");
    clean_msgs();
    if(!delete_id_mun.value){
        document.getElementById("delete_err").innerHTML = "¡Seleccione una opción!".toUpperCase();
    }
    else {
        eel.delete("municipios", delete_id_mun.value);
        update_table();
        document.getElementById("delete_suc").innerHTML = "Eliminado exitosamente!";
    }
    clean_inputs();
}