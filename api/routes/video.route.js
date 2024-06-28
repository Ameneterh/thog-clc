import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  addvideo,
  getvideos,
  updatevideo,
  deletevideo,
  getVideoById,
  likeVideo,
} from "../controllers/video.controller.js";

const router = express.Router();

router.post("/addvideo", verifyToken, addvideo);
router.get("/getvideos", getvideos);
router.get("/:videoId", getVideoById);
router.put("/likevideo/:videoId", verifyToken, likeVideo);
router.put("/updatevideo/:videoId/:userId", verifyToken, updatevideo);
router.delete("/deletevideo/:videoId/:userId", verifyToken, deletevideo);

export default router;
