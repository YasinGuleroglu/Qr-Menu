import fetchMenu from "./api.js";
import { elements, renderCard } from "./ui.js";



document.addEventListener("DOMContentLoaded", async () => {
  // Apidan veri al
  const data = await fetchMenu();

  
  renderCard(data);

 

  elements.inputs.forEach((input) => {
    
    input.addEventListener("change", () => {
     
      const selected = input.id;

      console.log(selected);

      // ! Eğer seçili kategori all ise tüm ürünleri ama bunun dışında bir kategori ise buna ait ürünleri renderla

      if (selected === "all") {
        renderCard(data);
      } else {
        
        const filtred = data.filter((item) => item.category == selected);

     
        renderCard(filtred);
      }
    });
  });
});
