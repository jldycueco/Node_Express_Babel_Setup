import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
