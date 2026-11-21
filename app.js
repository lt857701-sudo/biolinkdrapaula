(() => {
  const links = window.BIO_LINKS || {};
  const notice = document.querySelector('.notice');
  let timer;

  const showNotice = (message) => {
    if (!notice) return;
    notice.textContent = message;
    notice.classList.add('show');
    window.clearTimeout(timer);
    timer = window.setTimeout(() => notice.classList.remove('show'), 3200);
  };

  document.querySelectorAll('[data-link]').forEach((anchor) => {
    const key = anchor.dataset.link;
    const destination = typeof links[key] === 'string' ? links[key].trim() : '';
    const safeUrl = /^https:\/\//i.test(destination);

    if (safeUrl) {
      anchor.href = destination;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    } else {
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const messages = {
          whatsapp: 'Adicione o número oficial do WhatsApp em links.js para ativar o agendamento.',
          method: 'Adicione o endereço da página do Método Provoda em links.js.',
          results: 'Adicione o endereço da página de Resultados em links.js.',
          studies: 'Adicione o endereço dos Estudos Clínicos em links.js.',
          talks: 'Adicione o endereço de Palestras e Eventos em links.js.'
        };
        showNotice(messages[key] || 'Configure este endereço em links.js.');
      });
    }
  });
})();
