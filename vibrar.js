document.querySelector("#vibrar").addEventListener("click", function () {
    navigator.vibrate(1000);
}, false);

document.querySelector("#vibrate-dos").addEventListener("click", function () {
    navigator.vibrate([200, 100, 200, 100]);
}, false);


document.querySelector("#vibrar-mucho").addEventListener("click", function () {
    navigator.vibrate(5000);
}, false);

document.querySelector("#vibrar-off").addEventListener("click", function () {
     navigator.vibrate(0);
 }, false);
