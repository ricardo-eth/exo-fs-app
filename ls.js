const fs = require('fs')


if (process.argv.length !== 3) {
  console.log(`usage: node ls.js path`)
  process.exit(1)
}

filenames = fs.readdirSync(process.argv[2]);
  
console.log("\nCurrent directory filenames:");
filenames.forEach(file => {
  console.log(file);
});

