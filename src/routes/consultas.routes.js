import { Router } from "express";
import { createConsulta } from "../controllers/consultas.controller.js";

const router = Router()

router.post("/consultas", createConsulta)

export default router;