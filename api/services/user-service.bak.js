// Database connection 
const { connectToDatabase } = require('../provider/mysql.js');

/**
 * @param {*} name 
 * @returns 
 */
async function fetchUserData(name) {
    const db = await connectToDatabase();
    const query = 'SELECT * FROM users WHERE name = ?';
    
    try {
        const [results] = await db.execute(query, [name]);
        return results;
    } catch (err) {
        console.error('Database error:', err);
        throw err;
    } finally {
        await db.end(); // Ensure the connection is closed
    }
}

module.exports = {
    fetchUserData
};
