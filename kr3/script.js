const operationButtons = document.querySelectorAll(".operation-btn");
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const operation = button.getAttribute("data-operation");
    calculate(operation);
  });
});

function calculate(operation) {
  const operand1 = parseFloat(document.getElementById("operand1").value);
  const operand2 = parseFloat(document.getElementById("operand2").value);

  let result;
  switch (operation) {
    case "add":
      result = operand1 + operand2;
      break;
    case "sub":
      result = operand1 - operand2;
      break;
    case "mul":
      result = operand1 * operand2;
      break;
    case "div":
      if (operand2 === 0) {
        document.getElementById(
          "result"
        ).innerText = `⛔ Second operand cannot be 0`;
        return;
      }
      result = operand1 / operand2;
      break;
    default:
      if (operand1 <= 0) {
        document.getElementById("result").innerText =
          "⛔ First operand should be higher than 0";
        return;
      }
      result = Math[operation](operand1);
      setMethodDescription(operation);
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}

function setMethodDescription(operation) {
  fetch(`utils/${operation}.json`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("method-description").innerHTML = `
                <h3>${data.name}</h3>
                <img src="utils/${data.image_name}" alt="${data.name}">
                <p>${data.description}</p>
            `;
    })
    .catch((error) =>
      console.error("Error fetching method description:", error)
    );
}
