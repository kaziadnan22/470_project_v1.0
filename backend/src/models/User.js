import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "volunteer", "informer", "adopter"],
    required: true,
  },
  profile: {
    petsInformed: { type: Number, default: 0 },
    volunteeredHours: { type: Number, default: 0 },
    rescuedPets: { type: Number, default: 0 },
    certificates: [String],
  },
  created: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
