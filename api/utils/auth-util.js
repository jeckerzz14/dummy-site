const md5 = require('js-md5');

// Hash password using md5
// Dev note: MD5 is not recommended; for demo purpose only as per flowchart; please use others i.e. (bcryptjs)
function hashPassword(username, password) {
    return md5(username + password);
}

module.exports = {
    hashPassword
};