const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "*", // for assignment/demo; later restrict to frontend URL
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/bookmarks", require("./routes/bookmarkRoutes"));

app.get("/", (req, res) => {
  res.send("Bookmark API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));