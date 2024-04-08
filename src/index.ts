import express, { Request, Response } from 'express';

// Create Express instance
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route handler for the root path
app.get('/', (req: Request, res: Response) => {
  res.send('Express+Typescript');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
