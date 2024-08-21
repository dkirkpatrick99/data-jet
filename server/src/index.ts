require('dotenv').config();
import * as express from 'express';
import * as cors from 'cors';
import routes from './routes/index';
import mongoose, { Error } from 'mongoose';
import { initializeApp } from "firebase-admin/app"
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
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/api", routes);

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});