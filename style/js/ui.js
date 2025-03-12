
const elements = {
    menuList: document.querySelector("#menu-list"),
    inputs: document.querySelectorAll("input"),
  };
  

  
  const renderCard = (data) => {
    
    const cardsHtml = data
      .map(
        (
          menu
        ) => `    <div class="d-flex flex-column flex-md-row text-dark gap-3" id="card">
          <img
            class="rounded img-fluid shadow"
            src="${menu.img}"
            alt="card-image"
          />
          <div>
            <div class="d-flex justify-content-between">
              <h5>${menu.title}</h5>
              <p class="fw-bold text-success">${(menu.price * 50).toFixed(2)}₺</p>
            </div>
            <p class="lead">
           ${menu.desc}
            </p>
          </div>
        </div>`
      )
      .join(" ");
  
    
    elements.menuList.innerHTML = cardsHtml;
  };
  
  export { elements, renderCard };
  