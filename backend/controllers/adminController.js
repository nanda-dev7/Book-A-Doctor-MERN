import Doctor from "../models/Doctor.js";
import User from "../models/User.js";




export const approveDoctorController = async (
  req,
  res
) => {
  try {
    const { doctorId } = req.params;

    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      {
        status: "approved",
      },
      { new: true }
    );

    const user = await User.findById(doctor.userId);

    user.isDoctor = true;
    user.role = "doctor";

    user.notifications.push({
      type: "doctor-account-approved",
      message:
        "Your doctor account has been approved by admin",
      onClickPath: "/doctor",
    });

    await user.save();

    res.status(200).send({
      success: true,
      message: "Doctor approved successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error approving doctor",
    });
  }
};

export const getAllDoctorsController = async (
  req,
  res
) => {
  try {
    const doctors = await Doctor.find({});

    res.status(200).send({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Failed to fetch doctors",
    });
  }
};