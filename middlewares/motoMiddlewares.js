// motoMiddlewares.js

// Gestione delle rotte non registrate (404)
 const notFoundRoute = (req, res, next) => {
    res.status(404).json({
        error: "Risorsa non trovata",
        message: `La rotta ${req.url} non esiste`
    });
};

// Gestione degli errori
 const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Errore interno del server",
        message: err.message || "Si è verificato un errore"
    });
};

// Validazione  dati nelle operazioni store/update
 const validateMotoData = (req, res, next) => {
    const { marca, modello, cavalli, tipo, immagine } = req.body;

    if (!marca || !modello || !cavalli || !tipo || !immagine) {
        return res.status(400).json({
            error: "Dati mancanti",
            message: "Tutti i campi sono obbligatori"
        });
    }

    // Validazione tipo di dati
    if (typeof cavalli !== 'number') {
        return res.status(400).json({
            error: "Dato non valido",
            message: "I cavalli devono essere un numero"
        });
    }

    next();
};

export { notFoundRoute, errorHandler, validateMotoData };