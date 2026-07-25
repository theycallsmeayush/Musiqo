const fs = require('fs');
const file = 'a:/Projects/Music Player/app.js';
let data = fs.readFileSync(file, 'utf8');
data = data.replace(/,\s*lyrics:\s*\[[^\]]*\]/g, '');
fs.writeFileSync(file, data, 'utf8');
