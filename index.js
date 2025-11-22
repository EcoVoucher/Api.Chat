require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { chat } = require('./chatService');

const app = express();
app.use(bodyParser.json());

// Endpoint do chatbot
app.post('/chat', async (req, res) => {
  try {
    const { userId, message } = req.body;

    if (!userId || !message) {
      return res.status(400).json({ error: 'userId e message são obrigatórios' });
    }

    const reply = await chat(userId, message);

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor do chatbot' });
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Chatbot LLM rodando na porta ${PORT}`);
});
