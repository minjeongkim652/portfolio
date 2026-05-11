const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


// 🔥 방문자 스키마
const visitorSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

const Visitor = mongoose.model("Visitor", visitorSchema);

app.post("/visit", async (req, res) => {

  let visitor = await Visitor.findOne();

  // 처음 접속이면
  if (!visitor) {
    visitor = new Visitor({ count: 1 });
  } else {
    // 기존 방문자 수 +1
    visitor.count += 1;
  }

  await visitor.save();

  res.json({
    count: visitor.count,
  });
});


app.get("/", (req, res) => {
  res.send("Hello Server!");
});

app.listen(5000, () => {
  console.log("server running on 5000");
});