import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  applyDoctorController,
  getDoctorInfoController,
} from "../controllers/doctorController.js";

const router = express.Router();

router.post(
  "/apply-doctor",
  authMiddleware,
  applyDoctorController
);

router.get(
  "/get-doctor-info",
  authMiddleware,
  getDoctorInfoController
);

export default router;