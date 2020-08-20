const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(
            "SELECT"
        );
    }

    //more function for DB

}


module.exports = new DB(connection);

