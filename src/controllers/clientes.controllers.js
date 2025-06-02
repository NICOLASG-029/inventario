import getConnection from "../db/database.js";

const postCliente = async (req, res) => {
  try {
    const {
      ClienteID,
      Compania,
      Contacto,
      Titulo,
      Direccion,
      Ciudad,
      Regiones,
      CodigoPostal,
      Pais,
      Telefono,
      Fax
    } = req.body;

    
    if (
      !ClienteID ||
      !Compania ||
      !Contacto ||
      !Titulo ||
      !Direccion ||
      !Ciudad ||
      !Regiones ||
      !CodigoPostal ||
      !Pais ||
      !Telefono ||
      !Fax
    ) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const newCliente = {
      ClienteID,
      Compania,
      Contacto,
      Titulo,
      Direccion,
      Ciudad,
      Regiones,
      CodigoPostal,
      Pais,
      Telefono,
      Fax
    };

    const connection = await getConnection();
    const result = await connection.query("INSERT INTO clientes SET ?", newCliente);

    res.status(201).json({ message: "Cliente creado exitosamente", clienteID: ClienteID });
  } catch (error) {
    console.error("ERROR 500:", error);
    res.status(500).json({ message: "Error al crear cliente", error });
  }
};

export const methodHTTP = {
  postCliente
};
