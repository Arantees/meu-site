function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");

  const mensagensZueiras = [
    "Parabéns! Você clicou no botão mais inútil da internet 🎉",
    "Isso aqui é quase um site da NASA, só que com mais meme.",
    "Você desbloqueou... nada! Mas fico feliz que clicou 😄",
    "Sim, eu realmente programei esse botão só pra isso.",
    "Já que clicou, agora tem que entregar esse trabalho por mim 😂",
  ];

  const aleatorio = Math.floor(Math.random() * mensagensZueiras.length);
  mensagem.innerText = mensagensZueiras[aleatorio];
}
