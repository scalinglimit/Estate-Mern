import express from "express";
import { test } from "../controllers/user.controller.js";

//init route
const router = express.Router();

//routes
router.get("/", test);

export default router;
