import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  bookAppointmentController,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post(
  "/book-appointment",
  authMiddleware,
  bookAppointmentController
);

export default router;