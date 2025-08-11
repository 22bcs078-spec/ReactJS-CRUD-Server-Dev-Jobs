import express from "express";
import jobs from "./jobs.json" assert { type: "json" };

const app = express();

app.get("/", (req, res) => {
  res.json(jobs);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
