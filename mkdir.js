const { mkdirSync } = require('fs')

if (process.argv.length != 3) {
  console.log(`usage: node mkdir.js nameFolder`)
  process.exit(1)
}

let nameFolder = process.argv[2]

mkdirSync(`./${nameFolder}`)