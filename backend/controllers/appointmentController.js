export const bookAppointmentController =
  async (req, res) => {
    try {
      res.status(200).send({
        success: true,
        message: "Book Appointment API Working",
      });
    } catch (error) {
      console.log(error);
    }
  };