import getConnection from "../db/database.js";

const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { ProductoNombre, PrecioUnitario } = req.body;

    // Validación
    if (!ProductoNombre || !PrecioUnitario) {
      return res.status(400).json({ message: "ProductoNombre y PrecioUnitario son obligatorios" });
    }

    const updatedProducto = { ProductoNombre, PrecioUnitario };
    const connection = await getConnection();
    const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?", [updatedProducto, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    console.error("ERROR 500:", error);
    res.status(500).json({ message: "Error al actualizar producto", error });
  }
};

export const methodHTTP = {
  updateProducto
};
