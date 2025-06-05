const url = "http://localhost:3306/api/categorias";

export const obtainCategories = async () => {
  try {
    const resultado = await fetch(url);
    if (!resultado.ok) {
      throw new Error(`Error HTTP: ${resultado.status}`);
    }
    const categorias = await resultado.json();
    return categorias;
  } catch (error) {
    console.error("Error al obtener categorías:", error.message);
    return [];
  }
};