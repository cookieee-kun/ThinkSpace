import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";	
import connectDB from "./config/db.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectDB();
	
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {	
  console.log(`Server running on port ${PORT}`);
});
