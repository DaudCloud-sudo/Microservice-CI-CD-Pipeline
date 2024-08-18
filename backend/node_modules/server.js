const express = require("express");
const app = express();
const PORT = 3000;

app.get("/data", (req, res) => {
  res.json({
    message:
      "Hello from the Backend! I am DaudCloud-sudo running at version 2.0",
  });
});

app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
