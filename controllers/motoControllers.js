
import motoArr from "../motoBlog.js";

//IMPOSTO ED ESPORTO LE FUNZIONI PER LE OPERAZIONI CRUD NELLE ROUTE

const index = (req, res) => {
   //definisco l'oggetto della query
    const query = req.query;

    //setto che se la query è vuota ritorno tutto l'array (essendo index)
    const queryArr = [];
    for(let key in query) {
        queryArr.push(key)
    }
   
    if(queryArr.length===0) return res.json({motoArr})

    //nel caso in cui la query non è vuota filtro dinamicamente

    // Avvio il filtraggio per ogni oggetto "moto" nell'array motoArr
    const filtered = motoArr.filter(moto => {

        // tramite every sull'array delle chiavi contenute nella query
        //  controllo che la moto soddisfi tutte le condizioni specificate nella query
        
        return queryArr.every(chiave => {

            // Prendo il valore del filtro passato nei parametri e lo rendo case insensitive
            const queryFilter = query[chiave].toLowerCase();

            // Prendo il valore corrispondente nella moto
            const motoFilter = moto[chiave];


            // Se è una stringa, confronto con la query string  usando includes
            if (typeof motoFilter === "string") {
                return motoFilter.toLowerCase().includes(queryFilter)
            }

            //se non è una stringa lo trasformo in stringa e poi lo confronto
            return motoFilter.toString() === queryFilter;


        })


    })
    //se il risultato del filtraggio è un array vuoto restituisco errore e messaggio di moto non trovata.
    if (filtered.length === 0) return res.status(404).json({ Error: "Moto non trovata" })

    //altrimenti restituisco il risultato.
    res.json({ filtered })
};


const show = (req, res) => {
  const motoId = Number(req.params.id);
  const result = motoArr.find(moto => moto.id === motoId);


  if (result) {
    return res.json({ result });

  } else {
    return res.status(404).json({ error: "Moto non trovata" });
  }
}

const store = (req,res) => {
 const newId = motoArr[motoArr.length-1].id+1;
 const newMoto = {
  id : newId,
  marca: req.body.marca,
  modello: req.body.modello,
  cavalli: req.body.cavalli,
  tipo: req.body.tipo,
  immagine: req.body.immagine
};

motoArr.push(newMoto);

console.log(motoArr)

res.status(201);
res.json(newMoto);


  
}

const update = (req,res)=>{

const motoId = Number(req.params.id);
const result = motoArr.find(moto => moto.id === motoId)
if(result){;
   result.marca = req.body.marca;
   result.modello = req.body.modello;
   result.cavalli = req.body.cavalli;
   result.tipo = req.body.tipo;
   result.immagine = req.body.immagine;
} else {
 res.status(404).json({error : "Moto non trovata"})
}

res.json(result)

}

const destroy = (req, res) => {
  const motoId = Number(req.params.id);
  const index = motoArr.findIndex(moto => moto.id === motoId);

if(index === -1){
    return res.status(404).json({error: "moto non trovata"});

} else {

   (motoArr.splice(index,1));
    res.sendStatus(204);
} 
}

const motoController = {
    index,
    show,
    store,
    update,
    destroy
}

export default motoController;