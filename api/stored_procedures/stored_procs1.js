const sequelize = require('sequelize')
const db = require('../../models/index')

const createStoredProc = async (req, res) => {
    let cat;
    let sql = `DELIMITER $$
                CREATE PROCEDURE GetCategories()
                    BEGIN
                        SELECT * from categories;
                    END
              DELIMITER ;`
    cat = await db.sequelize.query(sql)
}