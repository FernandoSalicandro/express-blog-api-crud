import express from "express";
import router from "./routers/moto.js"
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



app.listen(port, () => {
    console.log("server in ascolto")
})



// ### Esercizio
// **Milestone 1**
// Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store.
// - Impostiamo il verbo e l’endpoint corretti
// - Selezioniamo il tab body e scegliamo il formato raw e JSON
// - Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post
// *Nota: se vogliamo avere delle immagini, inventiamole pure.*
// *Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.*
// **Milestone 2**
// Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
// Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un `console.log`
// **Milestone 3**
// Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
// Testiamolo con postman.


// **Milestone 4**
// Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.
// ### Bonus
// - Quelli del giorno prima, se non già fatti: 404 per la show e destroy, query string param in index per fare il filtro singolo
// - In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
// - Provate ad aggiungere filtri multipli (3 filtri) nella rotta index
// Buon Lavoro e buon divertimento
