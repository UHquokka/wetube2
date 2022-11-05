import exress from "express";

const app = exress();

const PORT = 5555;

const handleHome = (req, res) => {
  return res.send("I still love you");
};

app.get("/", handleHome);

app.listen(5555, () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🍋`)
);
