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
    function removeElementOnce() {
        hero.lastElementChild.remove();
        document.removeEventListener('click', removeElementOnce);
    }
}
document.addEventListener('click', function (event) {
    console.log(event);
});

const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    // create a new paragraph element
    const newElement = document.createElement('p');
  
    // add text to the paragraph 
    newElement.textContent = 'This is paragraph number ' + i;

    // register an event listener to the paragraph element
    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    });

    // append the paragraph to the new div element 
    myCustomDiv.appendChild(newElement);
}

// append the new div element to the page
document.body.appendChild(myCustomDiv);
