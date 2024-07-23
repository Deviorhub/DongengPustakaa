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
app.use(
  cors({
    origin: "https://dongeng-pustaka-gamma.vercel.app/",
    credentials: true,
    optionsSuccessStatus: 200
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://dongeng-pustaka-gamma.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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
