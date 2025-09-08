import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";	
import connectDB from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json()); 
app.use(cors({
  origin: "http://localhost:5173" 
})) 
app.use(rateLimiter)

app.use(express.urlencoded({ extended: true })); 
	
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {	
    console.log(`Server running on port ${PORT}`);
  });
});
