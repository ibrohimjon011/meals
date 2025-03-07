fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.meals);
    
    for (let i = 0; i < data.meals.length; i++) {
      let box = document.querySelector(".box");
      box.innerHTML += `
<div class="row">
    <div class="col">
      <div class="card">
        <div class="card-image">
          <img src=${data.meals[i].strMealThumb}>
          <span class="card-title">${data.meals[i].strMeal}</span>
        </div>
        <div class="card-content">
          <p>${data.meals[i].strInstructions.slice(0,150)}...</p>
        </div>
        <div class="card-action">
          <a href=${data.meals[i].strYoutube} target = "_blank">watch recieapt</a>
        </div>
      </div>
    </div>
  </div>
        
    `;
    }

  });
