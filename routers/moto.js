// Importo Express, l'array moto e il controller
import express from "express";
import motoArr from "../motoBlog.js";
import motoController from "../controllers/motoControllers.js";
import { validateMotoData } from "../middlewares/motoMiddlewares.js";

//Creo router
const router = express.Router();

//ROTTA INDEX 
router.get("/", motoController.index)

//ROTTA SHOW
router.get("/:id", motoController.show);

//ROTTA STORE 
router.post("/", validateMotoData,motoController.store)

//ROTTA UPDATE
router.put("/:id" ,validateMotoData, motoController.update)

//ROTTA DESTROY
router.delete("/:id", motoController.destroy);


//ESPORTO ROUTER
export default router;