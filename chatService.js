require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const empresa = require('./empresa');

// Inicializa a API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// HISTÓRICO E CACHE
const conversations = {};
const cache = {};
const MAX_HISTORY = 10;

// Adiciona uma mensagem ao histórico
function addToHistory(userId, role, content) {
  if (!conversations[userId]) {
    conversations[userId] = [];
  }

  conversations[userId].push({ role, content });

  // Limita o histórico
  conversations[userId] = conversations[userId].slice(-MAX_HISTORY);
}

// Formata histórico no padrão Gemini
function getFormattedHistory(userId) {
  if (!conversations[userId]) return [];

  return conversations[userId].map(msg => ({
    role: msg.role === "model" ? "model" : "user",
    parts: [{ text: msg.content }]
  }));
}

async function chat(userId, message) {
  // CACHE
  if (cache[message]) {
    return cache[message];
  }

  // Salva mensagem do usuário
  addToHistory(userId, "user", message);

  const formattedHistory = getFormattedHistory(userId);

  // SYSTEM PROMPT
  const systemPrompt = `
Você é um assistente virtual da empresa ${empresa.nome}.
Endereço: ${empresa.endereco}
Horário de funcionamento: ${empresa.horarioFuncionamento}

Produtos disponíveis:
${empresa.produtos.map(p => `- ${p.nome} - ${p.preco}`).join("\n")}

Perguntas frequentes:
${empresa.perguntasFrequentes
    .map(p => `Pergunta: "${p.pergunta}"\nResposta: "${p.resposta}"`)
    .join("\n\n")}

Se o usuário fizer uma dessas perguntas, responda com a resposta correspondente.
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const chatSession = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }]
        },
        ...formattedHistory
      ]
    });

    const result = await chatSession.sendMessage(message);
    const botReply = result.response.text();

    // Salva resposta no histórico
    addToHistory(userId, "model", botReply);

    // Salva no cache
    cache[message] = botReply;

    return botReply;
  } catch (error) {
    console.error("Erro ao chamar a API Gemini:", error);
    throw new Error("Falha ao obter resposta da IA");
  }
}

module.exports = { chat };
