// Obtiene el nombre de la tabla según el nombre del archivo
let file_name = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
let table_name = file_name.slice(0, -5);
console.log(table_name);

// Limpiar inputs
function clean_inputs() {
    inputs = document.getElementsByClassName("crud_input");
    selects = document.getElementsByClassName("crud_select");
    for (let i of inputs) { i.value = ""; }
    for (let s of selects) { s.value = ""; }
}
// Actualizar tablas
function update_table() {
    eel.select(table_name)(get_data);
}
// Limpiar mensajes de error/success
function clean_msgs() {
    ps = document.getElementsByClassName("p_msg");
    for (let p of ps) { p.innerHTML = ""; }
}

// CREATE
document.querySelector(".crud_create").onclick = function (){ 
    console.log('create');
    crete_name = document.getElementById("create_name");
    clean_msgs();
    if(!create_name.value) {                    // null, empty, undefined...
        document.getElementById("create_err").innerHTML = "¡La entrada no puede estar vacía!".toUpperCase();
    }
    else if(create_name.value.length < 3) {     // string too short
        document.getElementById("create_err").innerHTML = "¡La entrada debe tener al menos 3 cáracteres!".toUpperCase();
    }
    else {
        eel.create(table_name,create_name.value);
        update_table();
        document.getElementById("create_suc").innerHTML = "¡Agregado exitosamente!";
        console.log("success");
    }
    clean_inputs();
}  

// READ
window.onload = function () {
    eel.select(table_name)(get_data);
}
function get_data(output){
    console.log("read");
    json_list = JSON.parse(output);
    string_table = "";
    if (table_name === "municipios") {
        string_table = "<tr><th>Id municipio</th><th>Nombre del municipio</th></tr>";
    }
    else if(table_name === "arboles") {
        string_table = "<tr><th>Id árbol</th><th>Nombre del árbol</th></tr>";
    }
    else if(table_name === "contratistas") {
        string_table = "<tr><th>Id contratista</th><th>Nombre del contratista</th></tr>";
    }
    
    string_select = "<option disabled selected value style='color:gray'></option>";
    json_list.forEach(row => string_table = string_table.concat("<tr><td>", row[0], "</td>", "<td>", row[1] ,"</td></tr>"));
    json_list.forEach(row => string_select = string_select.concat("<option value='", row[0], "'>", row[0], " - ", row[1], "</option>"));
    document.getElementById("data").innerHTML = string_table;
    document.getElementById("update_id").innerHTML = string_select;
    document.getElementById("delete_id").innerHTML = string_select;
}

//UPDATE
document.querySelector(".crud_update").onclick = function (){ 
    console.log('update');
    update_id = document.getElementById("update_id");
    update_new_name = document.getElementById("update_name");
    update_args = [update_id.value, update_new_name.value];
    clean_msgs();
    if(!update_args[0] || !update_args[1]) {
        document.getElementById("update_err").innerHTML = "¡Tiene campos vacíos!".toUpperCase();
    }
    else if(update_args[1].length < 3) {
        document.getElementById("update_err").innerHTML = "¡La entrada debe tener al menos 3 cáracteres!".toUpperCase();
    }
    else {
        eel.update(table_name, update_args);
        update_table();
        document.getElementById("update_suc").innerHTML = "¡Editado exitosamente!";
    }
    clean_inputs();
} 

//DELETE
document.querySelector(".crud_delete").onclick = function (){ 
    console.log('delete');
    delete_id = document.getElementById("delete_id");
    clean_msgs();
    if(!delete_id.value){
        document.getElementById("delete_err").innerHTML = "¡Seleccione una opción!".toUpperCase();
    }
    else {
        eel.delete(table_name, delete_id.value);
        update_table();
        document.getElementById("delete_suc").innerHTML = "Eliminado exitosamente!";
    }
    clean_inputs();
}