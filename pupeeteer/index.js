const express = require("express");
const app = express();
const scrapeGitHubUser = require("./scraper");

app.get("/github-user/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const data = await scrapeGitHubUser(username);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to scrape GitHub user data" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
