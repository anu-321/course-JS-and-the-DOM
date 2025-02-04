const header = document.querySelector("h1");
const originalText = header.textContent;
const updatedText = "Build an AR app";
header.addEventListener("mouseover", function () {
    header.textContent = updatedText;
  });
  header.addEventListener("mouseout", function () {
    header.textContent = originalText;
  });
  document.body.addEventListener("keypress",function(){console.log('removing first child');document.getElementById("contain-all").firstElementChild.remove();})
  
  
  const hero = document.querySelector('.hero__module');
  function removeElementOnce() {
    hero.lastElementChild.remove();
    document.addEventListener('click', removeElementOnce);
}