import {
  getAllUsers as modelGetAllUsers,
  getUsersById as modelGetUsersId,
  // addUsers
} from "../Models/ModelUsers.js";

export const getAllUsersController = async (req, res) => {
  try {
    const data = await modelGetAllUsers();
    res.json({
      message: "GET semua users berhasil!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await modelGetUsersId(id);
    if (data.length > 0) {
      res.json({
        message: `GET users dengan ID:${id} berhasil!`,
        data: data,
      });
    } else {
      res.status(404).json({
        message: `Users dengan ID:${id} tidak ditemukan.`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
