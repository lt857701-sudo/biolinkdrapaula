# Link da bio — Dra. Paula Pádua

Projeto de link da bio em **formato exclusivamente mobile**. A composição permanece em uma única coluna com largura máxima de 430 px também quando visualizada em computador; não existe layout desktop de site.

## Arquivos

- `index.html` — estrutura da bio.
- `styles.css` — composição vertical, tipografia e estilos.
- `app.js` — comportamento dos links e aviso quando um destino ainda não foi configurado.
- `links.js` — destinos oficiais editáveis.
- `assets/dra-paula-hero.webp` — fotografia otimizada da doutora.

## Configurar endereços

Preencha os endereços verdadeiros em `links.js`. O WhatsApp deve usar o formato `https://wa.me/55DDDNUMERO`, somente com números. Os quatro destinos podem ser URLs HTTPS existentes.

Nenhum telefone ou endereço foi inventado. Enquanto o campo estiver vazio, o toque mostra uma mensagem explicando qual destino falta configurar.

## Testar localmente

Abra `index.html` ou sirva a pasta com `python -m http.server 8000` e acesse `http://localhost:8000`.
