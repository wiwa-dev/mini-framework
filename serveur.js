const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const app = express();
const PORT = 8080;
// Configurer Livereload pour surveiller le dossier "src"
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'src'));

// Ajouter le middleware Livereload à Express
app.use(connectLivereload());

// Servir les fichiers statiques depuis le dossier "src"
app.use(express.static(path.join(__dirname, 'src')));

// Route pour servir le fichier HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

// Rafraîchir automatiquement le navigateur lorsqu'il y a des changements
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});