/**
 * @author SriVishnu
 * @email srivishnu.prasaadh@skeintech.com
 * @create date 2021-01-30 12:56:48
 * @modify date 2021-01-30 13:25:19
 * @modify date 2021-01-30 12:32:46
 * @desc [description]
 */
const database = require("../config/database")
const mysql = require('mysql2')

const { Message } = require("../utils/messages")
const uniqid = require('uniqid')


const QueryGenerator = {

    insert(table_name, data = [], duplication = []) {

        if (!(data instanceof Array)) {
            data = [data]
        }


        let keys = Object.keys(data[0]).join(),
            values = data.map(item => {
                return `(${Object.values(item).map(() => '?').join()})`
            })
        let actual_insert_data = data.map(item => {
            return Object.values(item)
        })

        actual_insert_data = [].concat.apply([], actual_insert_data);

        let query = mysql.format(`INSERT INTO ${table_name} (${keys}) VALUES ${values}`, actual_insert_data)
        // logger.info(`PREPARING ${query}`)
        if (duplication.length) {
            duplication = duplication.length ? ` ${duplication.map(item => `${item} = VALUES(${item})}`)} ` : '';
            query += duplication
        }

        // logger.info(`PREPARING ${query.replace(/(\r\n|\n|\r)/gm, "")}`)
        return query

    },

    update(table_name, data, where = null) {
        let update_sequence = Object.keys(data).map(item => {
            return `${item} = ?`
        }).join()

        let values = Object.values(data)


        if (where) {
            values = [...values, ...Object.values(where)]

            where = Object.keys(where).map(item => {
                return `${item} = ?`
            })


            console.log(where, values)
            //where = where.length ? ` WHERE ${where.join()} ` : '';
            where = where.length ? ` WHERE ${where.join(' and ')} ` : '';
        }



        let query = mysql.format(`UPDATE ${table_name} SET ${update_sequence} ${where}`, values)

        // logger.info(`PREPARING ${query}`)
        return query

    },
    delete(table_name, where) {
        if (where) {

            where = Object.keys(where).map(item => {
                return `${item} = ?`
            })
        }
        else {
            throw new Error(Message.Common.FailureMessage.NoAccessToDelete)
        }

    },
    format(query, values) {


        if (values instanceof Array) {
            query = mysql.format(query, values)

        }
        else {


            query = query.replace(/\:(\w+)/g, function (txt, key) {

                console.log(values, key)
                if (values.hasOwnProperty(key)) {
                    console.log(values[key])
                    return mysql.escape(values[key]);
                }

                return txt;
            })
        }

        // logger.info(`PREPARING ${query.replace(/(\r\n|\n|\r)/gm, "")}`)

        return query

    },
    CURRENT_TIMESTAMP: {
        toSqlString: function () {
            return 'CURRENT_TIMESTAMP()';
        }
    },
    LAST_INSERTID: {
        toSqlString: function () {
            return 'LAST_INSERT_ID()';
        }
    },

    RANDOM_UNIQID: `SP_${uniqid.time().toUpperCase()}`

}


module.exports = QueryGenerator
