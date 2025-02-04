const header = document.querySelector("h1");
const originalText = header.textContent;
const updatedText = "Build an AR app";
header.addEventListener("mouseover", function () {
    header.textContent = updatedText;
  });
  header.addEventListener("mouseout", function () {
    header.textContent = originalText;
  });