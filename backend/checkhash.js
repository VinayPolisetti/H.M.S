var crypto = require('crypto');
var hash = crypto.createHash('sha256');
data = hash.update('1234', 'utf-8');
gen_hash = data.digest('hex');

console.log(gen_hash);