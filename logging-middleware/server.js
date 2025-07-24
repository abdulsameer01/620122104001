const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

const urlMapPath = path.join(__dirname, "logs.txt");

const getUrlMappings = () => {
  if (!fs.existsSync(urlMapPath)) return {};
  const data = fs.readFileSync(urlMapPath, "utf8");
  return JSON.parse(data || "{}");
};

const saveUrlMappings = (mappings) => {
  fs.writeFileSync(urlMapPath, JSON.stringify(mappings, null, 2));
};

const generateShortcode = () => Math.random().toString(36).substring(2, 8);

app.post("/api/shorten", (req, res) => {
  const { originalUrl } = req.body;
  const mappings = getUrlMappings();
  const shortcode = generateShortcode();
  mappings[shortcode] = originalUrl;
  saveUrlMappings(mappings);
  res.json({ shortcode });
});

app.get("/:shortcode", (req, res) => {
  const mappings = getUrlMappings();
  const originalUrl = mappings[req.params.shortcode];
  if (originalUrl) {
    res.json({ originalUrl });
  } else {
    res.status(404).json({ error: "Shortcode not found" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
app.get("/", (req, res) => {
  res.send("URL Shortener API is running 🚀");
});

