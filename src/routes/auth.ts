import { Router} from "express";
import { authHandler } from "../handlers/auth";

const router = Router();


router.post("/login", authHandler);

export default router;
