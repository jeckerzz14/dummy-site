// Database connection 
const knexConfig = require('../knexfile').development;
const knex = require('knex')(knexConfig);

/**
 * @param {*} name 
 * @returns 
 */
async function fetchUserData(name) {
    try {
        const results = await knex('users').where({ name });
        return results;
    } catch (err) {
        console.error('Database error:', err);
        throw err;
    }
}

module.exports = {
    fetchUserData
};

