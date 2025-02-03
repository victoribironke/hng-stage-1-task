const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({
    email: "victoribironke2019@gmail.com",
    current_datetime: new Date(),
    github_url: "https://github.com/victoribironke/hng-stage-0-task",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
