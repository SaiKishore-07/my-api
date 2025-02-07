const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const data = [
  { id: 1, imageUrl: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg", name: "Item 1" },
  { id: 2, imageUrl: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg", name: "Item 2" },
];

app.get("/api/items", (req, res) => {
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
