const mongoose = require("mongoose");
const StudentAnswerSchema = new mongoose.Schema({
studentName: { 
   type: String, 
   required: true },
answer: {
   type: String, 
   required: true 
},
 answeredAt: { 
    type: Date, 
    default: Date.now 
  }
},
    { timestamps: true }
);


const StudentSchema  = mongoose.model("StudentSchema", StudentAnswerSchema);
module.exports = StudentSchema;