const path = require('path');
const fs = require('fs').promises;

async function read(page) {
  const pathfile = path.join(__dirname, 'public', page);
  return await fs.readFile(pathfile);
}

module.exports = { read };
