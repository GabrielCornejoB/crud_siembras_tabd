window.onload = function () {
    eel.select()(call_back);
}
function call_back(output){
    console.log(output);
    console.log('----------------------------------------------');
    json_list = JSON.parse(output);
    console.log(json_list);
    console.log(json_list.length);
}