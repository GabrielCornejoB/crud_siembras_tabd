// CREATE
document.querySelector(".crud_create").onclick = function (){ 
    console.log('create');
    mun_name = document.getElementById("create_mun_name");
    eel.create("municipios",mun_name.value);
    location.reload();
}  

// READ
window.onload = function () {
    eel.select("municipios")(fill_table);
}
function fill_table(output){
    console.log("read");
    json_list = JSON.parse(output);
    string = "<tr><th>Id municipio</th><th>Nombre del municipio</th></tr>"
    json_list.forEach(row => string = string.concat("<tr><td>", row[0], "</td>", "<td>", row[1] ,"</td></tr>"));
    document.getElementById("data").innerHTML = string;
}

//UPDATE
// document.querySelector(".crud_update").onclick = function (){ 
//     console.log('update');
// } 

//DELETE
// document.querySelector(".crud_delete").onclick = function (){ 
//     console.log('delete');
// }  




