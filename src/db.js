import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube2");

const db = mongoose.connection;

const handleOpen = () => console.log("🌏 Connected to DB 🌼");
const handleError = (error) => console.error("😰 DB error", error);
//에러 발생시 실행되는 코드
db.on("error", handleError);
//성공적으로 연결시 실행되는 코드
db.once("open", handleOpen);
