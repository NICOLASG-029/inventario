import { obtainCategories } from "./../apiConnection/consumeApi.js";

document.addEventListener("DOMContentLoaded", () => {
  getCategories();
});

async function getCategories() {
  try {
    const categoriesObtained = await obtainCategories();
    const container = document.querySelector('tbody');
    container.innerHTML = ""; 

    categoriesObtained.forEach((category) => {
      const { CategoriaID, CategoriaNombre, Descripcion, Imagen } = category;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${CategoriaID}</td>
        <td>${CategoriaNombre}</td>
        <td>${Descripcion}</td>
        <td><img src="${Imagen}" width="100px" class="cuenta"></td>
        <td><button class="btn color3">Details</button></td>
        <td><button class="btn color2">Edit</button></td>
        <td><button class="btn color5">Delete</button></td>
      `;

      container.appendChild(row);
    });
  } catch (error) {
    console.error("Error al cargar categorías:", error.message);
  }
}
