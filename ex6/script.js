var container = document.getElementById('container');
window.onload = function() {
    add_new_chars(Math.floor(Math.random() * 3));
};

window.addEventListener("keyup", function(e) {
    var currentStr = container.textContent;
    if (currentStr.length > 0 && e.key === currentStr[0]) {
        container.textContent = currentStr.substring(1);
    }

    add_new_chars(Math.floor(Math.random() * 3) + 1);
});

function add_new_chars(num) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var result = "";
    for (var i = 0; i < num; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    container.textContent += result;
}
