var array = [];
for (var i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100));
}
array.sort(function(a, b) {
    return b - a;
});
var arrayOutput = document.createElement("p");
arrayOutput.innerHTML = "Відсортований масив: " + array.join(", ");
document.body.appendChild(arrayOutput);

var select = document.createElement("select");
select.innerHTML = `
    <option value="30">30px</option>
    <option value="50">50px</option>
    <option value="70">70px</option>
`;
document.body.appendChild(select);

var generateButton = document.createElement("button");
generateButton.innerHTML = "Згенерувати";
document.body.appendChild(generateButton);

generateButton.addEventListener("click", function() {
    var div = document.createElement("div");
    div.style.backgroundColor = "red";
    div.style.width = select.value + "px";
    div.style.height = "30px";
    document.body.appendChild(div);

    var upButton = document.createElement("button");
    upButton.innerHTML = "Посунути вверх";
    document.body.appendChild(upButton);

    var downButton = document.createElement("button");
    downButton.innerHTML = "Посунути вниз";
    document.body.appendChild(downButton);

    var divPosition = 0;
    upButton.addEventListener("click", function() {
        divPosition -= 20;
        div.style.position = "relative";
        div.style.top = divPosition + "px";
    });

    downButton.addEventListener("click", function() {
        divPosition += 20;
        div.style.position = "relative";
        div.style.top = divPosition + "px";
    });
});
