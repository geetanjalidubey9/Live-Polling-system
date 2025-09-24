const userService = require("../services/userService");

async function createUser(req, res) {
  try {
    const {role} = req.body;
    if (!role) {
      return res.status(400).json({ success: false, message: "role required" });
    }
    const user = await userService.createUserService({role});
    res.status(201).json({ success: true, user });
  } catch (err) {
    console.error("Error in createUser:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

module.exports = { createUser };
