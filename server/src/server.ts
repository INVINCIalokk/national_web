import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connectDB';


dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3001; // Port for the server
app.use(cors()); // Enable CORS if needed
app.use(express.json()); // Parse incoming JSON requests

// Define API routes here
app.get("/", (_, res) => {
  res.send("API Working with /api/v1");
});

//API ROUTES




app.listen(port, () => {
  console.log(`mogodb: ${process.env.MONGODB_URI}`);
  console.log(`port: ${process.env.PORT}`);
  connectDB(process.env.MONGODB_URI || '');
  console.log(`Server listening on port ${port}`);
});