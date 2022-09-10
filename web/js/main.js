document.querySelector("button").onclick = function summation(){  
    var data_1 = document.getElementById("n1").value  
    var data_2 = document.getElementById("n2").value  
    eel.add(data_1, data_2)(call_Back)  
}  
function call_Back(output){  
    document.getElementById("res").value = output  
}  