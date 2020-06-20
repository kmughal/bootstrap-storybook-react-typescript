#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Enter the name destination:", (destinationFolder) => {
  const sourceFolder = path.resolve(__dirname, "../boilerplat_code");
  start(sourceFolder, destinationFolder);
  updatePackageJsonName(destinationFolder);
  console.log("Bootstrap completed :", destinationFolder);
  rl.close();
});

function updatePackageJsonName(destinationFolder) {
  const projectName = path.basename(destinationFolder);
  const contents = require(`${destinationFolder}\\package.json`);
  contents.name = projectName;
  fs.writeFileSync(
    `${destinationFolder}\\package.json`,
    JSON.stringify(contents, null, 2)
  );
}

function start(thingsToCopyPath, destinationFolder) {
  const pathIsDirectory = isDirectory(thingsToCopyPath);
  if (pathIsDirectory) {
    const allStuff = fs.readdirSync(thingsToCopyPath, { encoding: "utf-8" });
    for (let a of allStuff) {
      if (a.startsWith(".git") || a.includes("node_modules")) {
        continue;
      }
      let fullPath = path.resolve(thingsToCopyPath, a);
      let destinationPath = path.resolve(destinationFolder, a);
      if (isDirectory(fullPath)) {
        if (!fs.existsSync(destinationPath)) fs.mkdirSync(destinationPath);
        start(fullPath, destinationPath);
      } else fs.copyFileSync(fullPath, destinationPath);
    }
  }
}

function isDirectory(thingsToCopyPath) {
  return fs.statSync(thingsToCopyPath).isDirectory();
}
