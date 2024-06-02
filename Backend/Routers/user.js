import express from "express";
import {login, logout, register } from "../Controllers/user.js";

const router = express.Router();

router.get("/users/logout", logout);
router.post("/users/login", login);
router.post("/users/register", register);

export default router;
