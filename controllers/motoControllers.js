
import motoArr from "../motoBlog.js";

//IMPOSTO ED ESPORTO LE FUNZIONI PER LE OPERAZIONI CRUD NELLE ROUTE

const index = (req, res) => {

  const motoFilter = req.query.marca;

  if (motoFilter) {
    const filtered = motoArr.filter(
      moto => moto.marca.toLowerCase() === motoFilter.toLowerCase()
    );

    if (filtered.length === 0) {
      return res.status(404).json({ error: `Nessuna moto trovata per la marca '${motoFilter}'` });
    }

    return res.json(filtered);
  } else {
    return res.json(motoArr);
  }
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