const express = require("express");
const app = express();
const PORT = 3000;

app.get("/data", (req, res) => {
  res.json({ message: "Hello from the Backend!" });
});

app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
