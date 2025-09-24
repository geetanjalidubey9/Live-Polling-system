const User = require('../Models/User'); 
const Poll=require('../Models/pollSchema')

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
async function createPollService ({text,option}) {
  try{
    const poll= new Poll({text,option})
    await poll.save();
    console.log("poll created",poll)
    return poll;
  }
  catch(err){
    console.error("Error creating poll",err);
    throw err;
  }
}
module.exports = { createUserService,createPollService };
