const { writeFile } = require('fs')
 
if (process.argv.length != 3) {
  console.log(`usage: node touch.js fileName.extention`)
  process.exit(1)
}

let fileName = process.argv[2]

writeFile(`${fileName}`, '', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});