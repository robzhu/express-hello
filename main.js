const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello from express\n"));
app.listen(3000, () => console.log(`App started on http://localhost:${port}`));
