import {
    getAllSearch as modelGetAllSearch
} from"../Models/ModelSearch.js";

export const getAllSearchController = async (req, res) => {
    const judul = req.query.judul;
    try {
        const results = await modelGetAllSearch(judul);
        if (results.length === 0) {
            return res.status(404).json({ error: `Cerita dengan judul:${judul} tidak ditemukan` });
        }
        res.json(results);
    } catch (error) {
        console.error("Error dalam search controller:", error);
        res.status(500).json({ error: 'Terjadi kesalahan saat melakukan pencarian' });
    }
};