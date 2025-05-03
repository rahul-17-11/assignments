const puppeteer = require("puppeteer");

async function scrapeGitHubUser(username) {
  const url = `https://github.com/${username}`;

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const user = await page.evaluate(() => {
    const getText = (selector) => {
      const el = document.querySelector(selector);
      return el ? el.innerText.trim() : null;
    };

    return {
      name: getText("span.p-name"),
      username: getText("span.p-nickname"),
      bio: getText("div.p-note"),
      repositories:
        parseInt(getText('a[href$="?tab=repositories"] span.Counter')) || 0,
      followers:
        parseInt(getText('a[href$="?tab=followers"] span.Counter')) || 0,
      following:
        parseInt(getText('a[href$="?tab=following"] span.Counter')) || 0,
    };
  });

  // Go to the Repositories tab
  await page.goto(`${url}?tab=repositories`, {
    waitUntil: "domcontentloaded",
  });

  const topRepositories = await page.evaluate(() => {
    const repos = [];
    const repoElements = document.querySelectorAll("li[itemprop='owns']");

    repoElements.forEach((repo, i) => {
      if (i >= 10) return; // Limit search space
      const nameEl = repo.querySelector("a[itemprop='name codeRepository']");
      const starEl = repo.querySelector("a[href$='/stargazers']");
      const name = nameEl ? nameEl.innerText.trim() : null;
      const stars = starEl
        ? parseInt(starEl.innerText.trim().replace(",", "")) || 0
        : 0;
      if (name) repos.push({ name, stars });
    });

    return repos.sort((a, b) => b.stars - a.stars).slice(0, 3);
  });

  await browser.close();

  return {
    ...user,
    top_repositories: topRepositories,
  };
}

module.exports = scrapeGitHubUser;
