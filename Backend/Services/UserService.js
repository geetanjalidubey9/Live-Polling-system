const User = require('../Models/User'); // Ensure filename correct hai

async function createUserService({role}) {
  try {
    const user = new User({role});
    await user.save();
    console.log("User created:", user);
    return user;
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
}

module.exports = { createUserService };
