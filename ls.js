const fs = require('fs')


if (process.argv.length !== 3) {
  console.log(`usage: node ls.js path`)
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

const stats = fs.statSync(process.argv[2])
if (!stats.isDirectory()) {
  console.log(`Error: ${process.argv[2]} is not a path`)
  process.exit(1)
}

fileNames = fs.readdirSync(process.argv[2]);
  
console.log("\nCurrent directory filenames:");
fileNames.forEach(file => {
  console.log(file);
});

