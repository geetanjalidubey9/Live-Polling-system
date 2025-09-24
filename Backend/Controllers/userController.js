const userService = require("../Service/Services");
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

async function createPoll(req, res) {
  try {
    const {question, options} = req.body;

    if (!question || !options || options.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Teacher, question, and at least 2 options are required",
      });
    }
    const savedPoll = await userService.createPollService({question, options});
    res.status(201).json({ success: true, poll: savedPoll });
  } catch (err) {
    console.error("Error creating poll:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

module.exports = { createPoll,createUser };
