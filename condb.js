const mysql = require('mysql');

const connection = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'give_for_child',
    // port: 3306,
    host: 'web3.vpsthai.net',
    user: 'qhctllrq_give-child',
    password: 'asdasd',
    database: 'qhctllrq_give-child',
    // port: 21,
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Database connected successfully :) !');
});

module.exports = connection;
