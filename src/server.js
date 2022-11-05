import exress from "express";

const app = exress();

const PORT = 5555;

app.get("/", ()=> console.log("Sombody is trying to go home"));

app.listen(5555, () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🍋`)
);
