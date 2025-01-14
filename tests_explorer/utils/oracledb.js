const oracledb = require('oracledb');
const { encode, decode } = require('node-encoder')
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

let connection;
async function openConnection() {
    // Aktifkan bila driver tidak ditemukan dan sesuaikan path nya
    // oracledb.initOracleClient({libDir: 'C:\\Users\\azp\\Downloads\\instantclient_21_11'});

    try {
        connection = await oracledb.getConnection({
            user: decode(process.env.ORACLE_USERNAME),
            password: decode(process.env.ORACLE_PASS),
            connectString: process.env.ORACLE_STRING
        });
        if (connection) {
            console.log('Connected to oracledb');
        }
    } catch (err) {
        console.log('Failed to connect oracledb');
        console.error(err.message);
    }
}

// For Insert, Update, Delete -> Don't forget commit
async function excuteQuery(query) {
    if (connection) {
        try {
            let result = await connection.execute(query);
            return result;
        } catch (err) {
            console.error(err.message);
        }
    }
}

async function select(query) {
    if (connection) {
        try {
            let result = await connection.execute(query);
            let panjanjMetaData = result['metaData'].length;
            let panjanjRows = result['rows'].length;
            let data = [];

            for (let i = 0; i < panjanjRows; i++) {
                let kata = {};
                for (let x = 0; x < panjanjMetaData; x++) {
                    let nama = result['metaData'][x]['name'];
                    let value = result['rows'][i][x];

                    kata[nama] = value;
                }
                data[i] = kata;
            }
            return data;
        } catch (err) {
            console.error(err.message);
        }
    }
}

async function commit() {
    if (connection) {
        try {
            await connection.commit();
        } catch (err) {
            console.error(err.message);
        }
    }
}

async function closeConnection() {
    if (connection) {
        try {
            await connection.close();
        } catch (err) {
            console.error(err.message);
        }
    }
}

async function fullexecute(query) {
    try {
        connection = await oracledb.getConnection({
            user: decode(process.env.ORACLE_USERNAME),
            password: decode(process.env.ORACLE_PASS),
            connectString: process.env.ORACLE_STRING
        });

        result = await connection.execute(query);
        return result;
    } catch (err) {
        console.error(err.message);
    } finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
            } catch (err) {
                console.error(err.message);
            }
        }
    }
}

module.exports = {
    openConnection,
    excuteQuery,
    select,
    commit,
    closeConnection,
    fullexecute
}