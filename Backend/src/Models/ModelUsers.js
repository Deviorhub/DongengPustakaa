import db from "../Config/Database.js";

export const getAllUsers = async () => {
  try {
    const SQLQuery = "SELECT * FROM users";
    const [rows] = await db.execute(SQLQuery);
    return rows;
  } catch (error) {
    console.error("Error pada proses getAllUsers:", error);
    throw error;
  }
};

export const getUsersById = async (id) => {
  try {
    const [data] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    console.log(data);
  } catch (error) {
    console.error("Error pada proses getAllUsers:", error);
    throw error;
  }
};

export const addUsers = (body) => {
  const {} = body;
  const SQLQuery = ``;
};
