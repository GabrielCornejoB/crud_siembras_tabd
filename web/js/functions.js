window.onload = function () {
    eel.select()(call_back);
}
function call_back(output){
    json_list = JSON.parse(output);

    string = "<tr><th>Id municipio</th><th>Nombre del municipio</th></tr>"
    json_list.forEach(row => string = string.concat("<tr><td>", row[0], "</td>", "<td>", row[1] ,"</td></tr>"));
    console.log(string);
    document.getElementById("data").innerHTML = string;
}