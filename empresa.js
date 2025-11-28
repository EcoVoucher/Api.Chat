const empresa = {
  nome: "EcoVoucher",
  horarioFuncionamento: "Segunda a Sexta: 9h às 18h, Sábado: 10h às 13h",

  produtos: [
    { nome: "Produto A", descricao: "Descrição do Produto A", preco: "R$ 50,00" },
    { nome: "Produto B", descricao: "Descrição do Produto B", preco: "R$ 100,00" },
  ],

  contato: {
    email: "ecovoucherdsm@gmail.com"
  },

  perguntasFrequentes: [
    {
      pergunta: "Qual é o horário de funcionamento?",
      resposta: "O nosso horário de funcionamento é de Segunda a Sexta, das 9h às 18h, e Sábado, das 10h às 13h."
    },
    {
      pergunta: "pontos",
      resposta: "Seus pontos são acumulados cada vez que você atualiza sua pegada ecológica! Acesse \"Histórico de Pontos\" para ver mais detalhes. 💚"
    },
    {
      pergunta: "voucher",
      resposta: "Você pode trocar seus pontos por vouchers no \"Catálogo de Vouchers\". Veja as ofertas disponíveis! 🎁"
    },
    {
      pergunta: "atualizar pegada",
      resposta: "Para atualizar sua pegada ecológica, vá até a seção \"Atualizar Pegada\" no app e siga as instruções. Quanto mais você atualizar, mais pontos ganha! 🌍"
    },
    {
      pergunta: "catálogo de vouchers",
      resposta: "No \"Catálogo de Vouchers\", você pode ver todos os vouchers disponíveis para troca com seus pontos. Escolha o que mais gosta! 🎟️"
    },
    {
      pergunta: "histórico de pontos",
      resposta: "Seu \"Histórico de Pontos\" mostra todas as suas atividades de ganho e troca de pontos. Acesse para acompanhar seu progresso! 📊"
    },
    {
      pergunta: "pegada ecológica",
      resposta: "A pegada ecológica mede seu impacto ambiental. Atualize regularmente em \"Atualizar Pegada\" para ganhar pontos! 🌿"
    },
    {
      pergunta: "coleta",
      resposta: "Encontre pontos de coleta próximos em \"Pontos de Coleta\". Descarte corretamente e ganhe recompensas! ♻️"
    },
    {
      pergunta: "como funciona",
      resposta: "O EcoVoucher funciona assim: você atualiza sua pegada ecológica, ganha pontos e troca por vouchers de parceiros! É simples e sustentável. 🌱"
    },
    {
      pergunta: "onde está localizado?",
      resposta: "Nós administramos o aplicativo e contamos com diversos pontos de coleta parceiros; consulte a opção \"Pontos de Coleta\" no app para encontrar o local mais próximo de você."
    },    
  ]
};

module.exports = empresa;
