import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import UserRoute from "./Routes/UserRoute.js";
import KategoriRoute from "./Routes/KategoriRoute.js";
import CeritaRoute from "./Routes/CeritaRoute.js";
import LikeRoute from "./Routes/LikeRoute.js";
import FavoriteRoute from "./Routes/FavoriteRoute.js";
import SearchRouter from "./Routes/SearchRoute.js";
import logRequest from "./Middleware/log.js";

const PORT = process.env.PORT;

const app = express();
// Daftar origin yang diizinkan
const allowedOrigins = [
  'https://dongeng-pustaka-gamma.vercel.app',
  'https://dongeng-pustaka-jqlot5hqx-deviors-projects.vercel.app',
  'http://localhost:5173'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Mengizinkan pengiriman credentials
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(logRequest);
app.use(express.json());
app.use(cookieParser());

app.use(
  UserRoute,
  KategoriRoute,
  CeritaRoute,
  LikeRoute,
  FavoriteRoute,
  SearchRouter
);

app.listen(PORT, () => {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
