const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "..", "static", "assets");
const outputFile = path.join(__dirname, "..", "docs", "ASSETS.md");

const files = fs
  .readdirSync(assetsDir)
  .filter((f) => /\.(png|jpg|jpeg|gif|svg)$/i.test(f));

let md = `# Assets

This page collects NTK diagrams, logos, and visuals.

---

## 📊 Diagrams
`;

for (const file of files) {
  md += `- ![${path.basename(file, path.extname(file))}](/assets/${file})\n`;
}

md += `
---

## 🎨 Logos

- ![NTK Logo](/img/logo.png)
`;

fs.writeFileSync(outputFile, md);
console.log(`✅ ASSETS.md updated with ${files.length} files.`);
