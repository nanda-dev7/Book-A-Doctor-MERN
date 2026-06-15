import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({
        success: false,
        message: "Authorization token missing",
      });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);

    return res.status(401).send({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;


export const getNotificationsController = async (
  req,
  res
) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).send({
      success: true,
      notifications: user.notifications,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Failed to fetch notifications",
    });
  }
};

export const markAllNotificationsController =
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id);

      user.seenNotifications.push(
        ...user.notifications
      );

      user.notifications = [];

      await user.save();

      res.status(200).send({
        success: true,
        message:
          "Notifications marked as read",
      });
    } catch (error) {
      console.log(error);

      res.status(500).send({
        success: false,
        message: "Failed to mark notifications",
      });
    }
  };