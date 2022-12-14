import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("π Connected to DB πΌ");
const handleError = (error) => console.error("π° DB error", error);
//μλ¬ λ°μμ μ€νλλ μ½λ
db.on("error", handleError);
//μ±κ³΅μ μΌλ‘ μ°κ²°μ μ€νλλ μ½λ
db.once("open", handleOpen);
