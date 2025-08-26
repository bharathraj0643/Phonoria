import express from "express";
import cors from "cors";
const app = express();

// common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extented: true, limit: "16kb" }));
app.use(express.static("public"));

// cors middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// import routes
import healthCheckRouter from "./routes/healthCheck.routes.js";
app.use("/api/healthcheck", healthCheckRouter);

export { app };
