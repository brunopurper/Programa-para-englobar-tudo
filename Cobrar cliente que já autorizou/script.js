document.getElementById('withdrawalForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const clientName = capitalizeFirstLetter(document.getElementById('clientName').value);
  const deviceModel = capitalizeFirstLetter(document.getElementById('deviceModel').value);

  const outputText = `
Olá ${clientName}, aqui é da Technique Eletrônica.

Espero que esteja bem!

Seu ${deviceModel} está pronto para retirada. Por favor, retire o quanto antes para evitar qualquer impacto na garantia das peças.

É importante lembrar que, conforme o Código de Defesa do Consumidor, oferecemos uma garantia legal de 90 dias a partir da data da entrega do produto. Se o aparelho não for retirado prontamente, isso pode reduzir o tempo de garantia com nosso fornecedor, o que nos coloca em prejuízo caso haja necessidade de substituição de peças.

Estamos à disposição para qualquer dúvida.

Atenciosamente,
Technique Eletrônica

Entre em contato conosco!
`;

  document.getElementById('outputText').value = outputText;

  // Copiar texto para área de transferência
  copyToClipboard(outputText);

  // Mostrar modal
  $('#confirmationModal').modal('show');
});

document.getElementById('copyButton').addEventListener('click', function() {
  const outputText = document.getElementById('outputText').value;
  copyToClipboard(outputText);
  alert('Texto copiado para a área de transferência!');
});

document.getElementById('prepareWhatsAppButton').addEventListener('click', function() {
  const clientNumber = document.getElementById('clientNumber').value.trim();
  const clientName = capitalizeFirstLetter(document.getElementById('clientName').value);
  const deviceModel = capitalizeFirstLetter(document.getElementById('deviceModel').value);

  // Remover caracteres não numéricos do número de telefone
  const phoneNumber = clientNumber.replace(/\D/g, '');

  // Verificar se o número tem 10 ou 11 dígitos (com ou sem DDD)
  if (phoneNumber.length === 10 || phoneNumber.length === 11) {
      // Adicionar o DDD 51 e o prefixo internacional
      const whatsappNumber = `55${phoneNumber}`;

      // Formatar mensagem para o WhatsApp
      const whatsappMessage = `
          Olá ${clientName}, aqui é da Technique Eletrônica.

          Essa é uma mensagem automática.

          Seu aparelho ${deviceModel} está pronto para retirada. Por favor, retire o quanto antes para evitar qualquer impacto na garantia das peças.

          É importante lembrar que, conforme o Código de Defesa do Consumidor, oferecemos uma garantia legal de 90 dias a partir da data da entrega do produto. Se o aparelho não for retirado prontamente, isso pode reduzir o tempo de garantia com nosso fornecedor, o que nos coloca em prejuízo caso haja necessidade de substituição de peças.

          Consulte condições de pagamento.

          Estamos à disposição para qualquer dúvida.

          Atenciosamente,
          Technique Eletrônica`;

      // Abrir WhatsApp Web com mensagem pré-preenchida
      const whatsappURL = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappURL);
  } else {
      alert('Por favor, insira um número de telefone válido.');
  }
});

document.getElementById('nextWithdrawal').addEventListener('click', function() {
  // Limpar todos os campos do formulário
  document.getElementById('withdrawalForm').reset();
  // Fechar o modal
  $('#confirmationModal').modal('hide');
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.querySelectorAll('.capitalize').forEach(function(input) {
  input.addEventListener('input', function(event) {
      let words = input.value.split(' ');
      words = words.map(word => capitalizeFirstLetter(word));
      input.value = words.join(' ');
  });
});

function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}
