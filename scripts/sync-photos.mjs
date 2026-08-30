import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const albumUrl = "https://photos.app.goo.gl/wigPajHs16cZTVKf7";
const photosDir = path.join(process.cwd(), "public", "photos");

console.log("Fetching latest photos from Google Photos album...");
const html = execSync(`curl -sL "${albumUrl}"`).toString();
const matches = [...new Set(html.match(/https:\/\/lh3\.googleusercontent\.com\/pw\/[^"=]*/g) || [])];

console.log(`Found ${matches.length} photo URLs.`);

if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir, { recursive: true });
}

matches.forEach((url, i) => {
  const photoPath = path.join(photosDir, `photo${i + 1}.jpg`);
  execSync(`curl -s "${url}=w1200" -o "${photoPath}"`);
  console.log(`Updated photo${i + 1}.jpg`);
});

console.log("Done syncing photos!");
