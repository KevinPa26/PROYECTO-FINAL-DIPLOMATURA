import { Router } from "express";
import {createNovedades, deleteNovedades, getNovedad, getNovedades, updateNovedades} from '../controllers/novedades.controller.js'
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.get("/novedades", getNovedades)
router.get("/novedades/:id", authRequired, getNovedad)
router.post("/novedades", authRequired, createNovedades)
router.delete("/novedades/:id", authRequired, deleteNovedades)
router.put("/novedades/:id", authRequired, updateNovedades)


export default router;