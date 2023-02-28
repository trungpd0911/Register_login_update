require("dotenv").config();
const express = require("express");
const { connectDb } = require("./src/models")
const router = require("./src/")
const PORT = 3000;

const app = express();
app.use(express.json());
connectDb();

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("ditme cuoc doi");
})

app.listen(PORT, () => {
    console.log(`example app listening at http://localhost:${PORT}`);
});