const ndList = document.querySelectorAll('.card--nanodegree__title');
ndList.forEach(function(nd){const button=document.createElement("button");button.textContent="Add to favorites";button.classList='button button--primary';nd.appendChild(button);});
