import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 3001; // Port for the server

app.use(cors()); // Enable CORS if needed
app.use(express.json()); // Parse incoming JSON requests

// Define API routes here
app.get('/api/data', (_, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});