const db = require('../config/db.config.js');
const fs = require('fs');

const backup = async (req, res) => {
    try {
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        const backupPath = `/var/opt/mssql/backups/backup_${timestamp}.bak`;
        const query = `BACKUP DATABASE ${process.env.DB_NAME} TO DISK = '${backupPath}'WITH INIT;`;
        await db.sequelize.query(query);

        return res.status(200).json({
            message: `Database backed up`,
            backupPath,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const restore = async (req, res) => {
	try {   
		const { backupFileName } = req.body;

		await db.sequelize.query(`USE master;`);
        await db.sequelize.query(`ALTER DATABASE ${process.env.DB_NAME} SET SINGLE_USER WITH ROLLBACK IMMEDIATE;`);
        await db.sequelize.query(`RESTORE DATABASE ${process.env.DB_NAME} FROM DISK = N'${backupFileName}' WITH REPLACE;`);
        await db.sequelize.query(`ALTER DATABASE ${process.env.DB_NAME} SET MULTI_USER;`);

		const query = `RESTORE DATABASE ${process.env.DB_NAME} FROM DISK = N'${backupFileName}' WITH REPLACE;`;
		await db.sequelize.query(query);

		await db.sequelize.query(`USE ${process.env.DB_NAME};`);

		return res.status(200).json({ message: 'Database restored successfully' });
	} catch (error) {
		console.error('Restore error:', error);
		return res.status(500).json({ error: error.message, stack: error.stack });
	}
};

module.exports = {
    backup,
    restore
};