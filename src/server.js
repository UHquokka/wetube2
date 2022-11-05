import exress from "express";

const app = exress();

const PORT = 5555;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddelware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue");
  next();
};

const handleHome = (req, res) => {
  return res.send("I still love you");
};

const handleProtected = (req, res) => {
  return res.send("welcome to the private rounge");
};
app.use(logger);
app.use(privateMiddelware);

app.get("/", handleHome);
app.get("/procted", handleProtected);

app.listen(5555, () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🍋`)
);
