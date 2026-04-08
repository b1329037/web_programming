var count = 1;

function addfunction() {
    var btn = document.createElement("BUTTON");

    btn.innerHTML = "CLICK ME (" + count + ")";
    btn.setAttribute("id", "btn_" + count);
    btn.setAttribute("class", "btn btn-outline-danger m-1");

    document.body.appendChild(btn);
    
    count++;
}

function delfunction() {
    var lastId = count - 1;
    var btn = document.getElementById("btn_" + lastId);
    
    if (btn) {
        document.body.removeChild(btn);
        count--;
    } else {
        
        count = 1;
    }
}
