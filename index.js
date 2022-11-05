const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.send({ message: "recived" }));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
