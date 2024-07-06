import db from "../Config/Database.js"

export const getAllSearch = async (judul) => {
    try {
        let SQLQuery = "SELECT * FROM ceritas";
        const params = [];

        if (judul) {
            SQLQuery += " WHERE judul LIKE ?";
            const searchQuery = `%${judul}%`;
            params.push(searchQuery);
        }

        console.log("Executing query:", SQLQuery); // Log query
        console.log("With params:", params); // Log params
        const [rows] = await db.execute(SQLQuery, params);
        return rows;
    } catch (error) {
        console.error("Error pada proses getAllSearch:", error);
        throw error;
    }
}
