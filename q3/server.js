const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;

const {
  addCurse,
  getcurse,
} = require("./modules/curseMudules");

const cors = require("cors");
const { log } = require("console");
app.use(
  cors({
    origin: `*`,
  })
);

app.use(express.json());

app.post("/api/addCurse", async (req, res) => {
  try {
    const { fullName, students, startYear } = req.body;
    await addCurse(fullName, students, startYear);
    return res.send({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, message: error.message });
  }
});

app.get("/api/getcurse", async (req, res) => {
  try {
    const curse = await getcurse();
    return res.send({ success: true, curse });
  } catch (error) {
    return res.status(400).send({ success: false, message: error.message });
  }
});

app.post("/api/sortTecher", async (req, res) => {
  try {
    const { salary } = req.body;
    await getTechersBySelry(salary);
    return res.send({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
