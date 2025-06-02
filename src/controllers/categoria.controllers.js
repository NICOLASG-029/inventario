import getConnection from "./../db/database.js";

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
        res.json(result);
    } catch (error) {
        console.error("ERROR 500", error);
        res.status(500).json({ message: "Error al obtener categorías", error });
    }
};

const postCategorias = async (req, res) => {
    try {
        const { CategoriaNombre, Descripcion, Imagen } = req.body;
        const category = { CategoriaNombre, Descripcion, Imagen };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO categorias SET ?", category);

        res.status(201).json({ message: "Categoría creada exitosamente", result });
    } catch (error) {
        console.error("ERROR 500", error);
        res.status(500).json({ message: "Error al crear la categoría", error });
    }
};

const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", [id]);

        if (result.length === 0) {
            res.status(404).json({ message: "Categoría no encontrada" });
        } else {
            res.json(result[0]);
        }
    } catch (error) {
        console.error("ERROR 500", error);
        res.status(500).json({ message: "Error al obtener la categoría", error });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", [id]);

        res.json({ message: "Categoría eliminada correctamente", result });
    } catch (error) {
        console.error("ERROR 500", error);
        res.status(500).json({ message: "Error al eliminar la categoría", error });
    }
};

const updateCategorias = async (req, res) => {
    try {
        const { id } = req.params;
        const { CategoriaNombre, Descripcion, Imagen } = req.body;
        const category = { CategoriaNombre, Descripcion, Imagen };

        const connection = await getConnection();
        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?", [category, id]);

        res.json({ message: "Categoría actualizada correctamente", result });
    } catch (error) {
        console.error("ERROR 500", error);
        res.status(500).json({ message: "Error al actualizar la categoría", error });
    }
};

export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory,
    deleteCategory,
    updateCategorias
};
