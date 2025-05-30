import express from "express";
import router from "./routers/moto.js"
import { notFoundRoute, errorHandler}  from "./middlewares/motoMiddlewares.js";


const app = express();
const port = 3000;
app.use(express.static("public"))
app.use(express.json());
const motoArr = [
    {
        id: 1,
        marca: "Ducati",
        modello: "Panigale V4",
        cavalli: 214,
        tipo: "Sportiva",
       immagine: "./img/panigalev4.jpg"

    },
    {
        id: 2,
        marca: "Yamaha",
        modello: "MT-07",
        cavalli: 74,
        tipo: "Naked",
        immagine: "./img/yamahamt07.jpg"
    },
    {
        id: 3,

        marca: "BMW",
        modello: "R 1250 GS",
        cavalli: 136,
        tipo: "Enduro",
        immagine: "img/bmwr1250gs.webp"

    },
    {
        id: 4,
        marca: "Kawasaki",
        modello: "Z900",
        cavalli: 125,
        tipo: "Naked",
        immagine: "img/kawasakiz900.png"
    },
    {
        id: 5,
        marca: "Harley-Davidson",
        modello: "Iron 883",
        cavalli: 52,
        tipo: "Cruiser",
        immagine: "img/iron883.jpg"
    }
];

export default motoArr;

//ROTTA BASE
app.get("/", (req,res)=> {
    res.send("Benvenuto nel sito")
})

app.use("/moto", router)

app.use(notFoundRoute);
app.use(errorHandler);

app.listen(port, () => {
    console.log("server in ascolto")
})









