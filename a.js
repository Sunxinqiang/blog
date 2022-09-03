const fs = require('fs')
const path = require('path')
let res = fs.readdirSync(path.join(__dirname, './blogs/algorithm/'))
console.log(res.join('\n'))