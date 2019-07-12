var mysql = require('mysql');

var connMysql = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portalnoticias'
    });
}

module.exports = function () {
    return connMysql;
}