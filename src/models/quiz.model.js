const query = require('../db/db-connection')
const tablename = 'quizzes'

exports.getAll = async () => {
    let sql = `SELECT * FROM ${tablename}`

    return await query(sql)
}

exports.create = async ({question,choice}) => {
    let sql = `INSERT INTO ${tablename}
        (question,choice) VALUES (?,?)
    `

    const result = await query(sql,[question,choice])
    const afrows = result ? result.affectedRows : 0

    return afrows
}