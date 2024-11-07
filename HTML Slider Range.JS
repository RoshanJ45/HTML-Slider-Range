    const rangeInput = document.getElementById("rangeInput");
    const rangeValue = document.getElementById("rangeValue");
    rangeInput.addEventListener("input", () => {
    rangeValue.textContent = rangeInput.value;
    });
