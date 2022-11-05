const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db')
const morgan = require('morgan')

connectDB()
const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan('tiny'))

app.get("/", (req, res) => res.send({ message: "recived" }));
app.use("/api/patient", require("./routes/PatientRoutes"))

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
