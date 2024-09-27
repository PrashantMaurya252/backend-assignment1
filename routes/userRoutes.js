import { Router } from "express";
import { takingInformation } from "../controllers/userController/index.js";


const router = Router()

router.route('/register').post(
    takingInformation
)

 export default router
