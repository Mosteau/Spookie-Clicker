const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

// API endpoint pour sauvegarder les scores (optionnel)
app.post('/api/save-score', (req, res) => {
    const { score, playerName } = req.body;
    // Ici vous pourriez ajouter une base de données
    console.log(`Score sauvegardé: ${playerName} - ${score}`);
    res.json({ success: true, message: 'Score sauvegardé' });
});

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`�� Spooky Clicker démarré sur le port ${PORT}`);
    console.log(`🌐 Ouvrez http://localhost:${PORT} dans votre navigateur`);
});

module.exports = app;