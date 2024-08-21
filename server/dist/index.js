"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
// import { firebaseConfig } from './firebase';
const app = (0, express_1.default)();
// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// mongoose
// .connect(process.env.MONGO_URI || "")
// .then((res) => console.log("Connected to DB"))
// .catch((err: Error) => console.log(err.message));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:5173",
}));
app.use("/api", index_1.default);
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
