// migrations/scripts/insert_users.js
const path = require('path');
const knexConfig = require(path.resolve(__dirname, '../../knexfile'));

const knex = require('knex')(knexConfig.development);

// Insert multiple rows into the 'users' table
const insertUsers = async () => {
  try {
    await knex('users').insert([
      { id: 1, name: 'name', password: 'cb825a05d743c50112becede14b2c132' },
      { id: 2, name: 'foo', password: '3858f62230ac3c915f300c664312c63f' }
    ]);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    // Close the database connection
    await knex.destroy();
  }
};

insertUsers();
