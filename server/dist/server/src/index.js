"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const index_1 = require("./routes/index");
// import { firebaseConfig } from './firebase';
const app = express();
// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// mongoose
// .connect(process.env.MONGO_URI || "")
// .then((res) => console.log("Connected to DB"))
// .catch((err: Error) => console.log(err.message));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));
app.use("/api", index_1.default);
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
