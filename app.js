const express = require('express');
const path = require('path');
const exphbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration de Handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware pour parser les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Route principale
app.get('/', (req, res) => {
    res.render('weather', { weather: null, error: null });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});