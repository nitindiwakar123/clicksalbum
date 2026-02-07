import express from "express";
import session from "express-session";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import passport from "passport";
import { createClient } from "redis";
import RedisHashStore from "./lib/redisHashStore.js";
import { connectDatabase } from "./config/database.js";
import { configurePassport } from "./config/passport.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

await connectDatabase();

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});
redisClient.on("error", (error) => console.error("Redis error", error));
await redisClient.connect();

configurePassport(passport);

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.use(
  session({
    name: "clicksalbum.sid",
    secret: process.env.SESSION_SECRET || "dev-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    store: new RedisHashStore({ client: redisClient }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/stories", storyRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`ClicksAlbum API running on port ${port}`);
});
