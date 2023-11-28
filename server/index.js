import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", async (req, res) => {
  res.json({ msg: "Home Page", success: true });
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}...`);
});
