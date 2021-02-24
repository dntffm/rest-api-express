const query = require('../db/db-connection')

const {multipleColumnSet} = require('../util/common.utils')
const tablename = 'users'

exports.findOne = async (params) => {
    const {columnSet,values} = multipleColumnSet(params)

    const sql = `SELECT * FROM ${tablename} WHERE ${columnSet}`

    const result = await query(sql,[...values])

    return result[0]
}

exports.create = async ({email,password}) => {
    const sql = `INSERT INTO ${tablename}
    (email,password) VALUES (?,?)
    `

    const result = await query(sql,[email,password])
    const afrows = result ? result.affectedRows : 0

    return afrows
}