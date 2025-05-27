
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

// SHOW: restituisce una moto specifica per ID
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
  console.log(req.body)
    res.send("Moto Aggiunta");
}

const update = (req,res)=>{

const motoId = Number(req.params.id);
const result = motoArr.find(moto => moto.id === motoId)
if(result){;
    res.send("moto modificata")
} else {
 res.status(404).json({error : "Moto non trovata"})
}

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