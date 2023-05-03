const priceRange = document.getElementById("price-range");
const priceOutput = document.getElementById("price-output");

priceRange.addEventListener("input", function() {
  priceOutput.textContent = priceRange.value;
});
