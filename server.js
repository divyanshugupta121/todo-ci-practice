const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/todos", (req, res) => {
  res.json([{ id: 1, text: "Practice Docker CI", done: false }]);
});

app.listen(PORT, () => console.log(`To-do app listening on port ${PORT}`));
