import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
// TODO => GET likes (who liked our profile)
// TODO => POST like a profile

export default router;
