const empresa = {
  nome: "Loja Exemplo",
  endereco: "Rua Exemplo, 123, São Paulo - SP",
  horarioFuncionamento: "Segunda a Sexta: 9h às 18h, Sábado: 10h às 14h",

  produtos: [
    { nome: "Produto A", descricao: "Descrição do Produto A", preco: "R$ 50,00" },
    { nome: "Produto B", descricao: "Descrição do Produto B", preco: "R$ 100,00" },
  ],

  contato: {
    telefone: "(11) 1234-5678",
    email: "contato@lojaexemplo.com.br"
  },

  perguntasFrequentes: [
    {
      pergunta: "Qual é o horário de funcionamento?",
      resposta: "O nosso horário de funcionamento é de Segunda a Sexta, das 9h às 18h, e Sábado, das 10h às 14h."
    },
    {
      pergunta: "Onde a loja está localizada?",
      resposta: "A nossa loja está localizada na Rua Exemplo, 123, São Paulo - SP."
    },
    {
      pergunta: "Quais produtos vocês vendem?",
      resposta: "Atualmente, nós vendemos os seguintes produtos: Produto A (R$ 50,00) e Produto B (R$ 100,00)."
    },
    {
      pergunta: "Como posso entrar em contato?",
      resposta: "Você pode entrar em contato pelo telefone (11) 1234-5678 ou por e-mail: contato@lojaexemplo.com.br."
    },
    {
      pergunta: "pegada",
      resposta: "Explique o que é uma pegada ecológica de forma simples."
    }
  ]
};

module.exports = empresa;
