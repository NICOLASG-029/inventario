import { Router } from "express";
import { methodHTTP as clientesController } from "../controllers/clientes.controllers.js";

const router = Router();


router.post("/", clientesController.postCliente);

export default router;
