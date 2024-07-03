import db from "../Config/Database.js";

export const getAllKategoris = async() => {
    try {
        const SQLQuery = 'SELECT * FROM kategoris';
        const [rows] = await db.execute(SQLQuery);
        return rows;
    } catch (error) {
        console.error('Error pada proses getAllKategoris:', error);
        throw error;
    }
}

export const getKategorisById = async(id) => {
    try {
        const SQLQuery = 'SELECT * FROM kategoris WHERE id = ?';
        const [rows] = await db.execute(SQLQuery, [id]);
        return rows;
    } catch (error) {
        console.error('Error pada proses getKategorisUsers:', error);
        throw error;
    }
}