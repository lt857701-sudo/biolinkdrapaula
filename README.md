# Link da bio — Dra. Paula Pádua

Página estática de link da bio em formato mobile fixo, feita com HTML, CSS e JavaScript puro. A composição permanece em uma única coluna com largura máxima de 430 px, inclusive quando visualizada em computador; não há um layout de site desktop.

## Arquivos

- `index.html` — estrutura e conteúdo da bio.
- `styles.css` — enquadramento da foto, composição e estilos.
- `app.js` — ativa os destinos configurados ou mostra um aviso quando faltam endereços.
- `links.js` — endereços oficiais editáveis.
- `assets/dra-paula-hero.jpg` — foto atualmente usada pela página.
- `assets/dra-paula-hero.webp` — outra imagem incluída no repositório, não usada pela página atual.

## Configurar os links antes de publicar

Preencha os cinco destinos oficiais em `links.js`: `whatsapp`, `method`, `results`, `studies` e `talks`. Use URLs HTTPS. Para o WhatsApp, use o formato `https://wa.me/55DDDNUMERO`, somente com números.

No estado atual, esses cinco valores estão vazios. A página não inventa destinos: ao tocar nos botões sem configuração, mostra um aviso informando o que falta. Preencha e teste os endereços antes de divulgar a URL de produção.

## Deploy na Vercel

O projeto é servido diretamente como site estático; não usa `package.json`, dependências, etapa de build ou funções serverless. Não é necessário adicionar `vercel.json` nem regras de rewrite. Os caminhos para CSS, scripts e imagens são relativos à raiz do projeto.

Ao importar `lt857701-sudo/biolinkdrapaula` na Vercel, use a raiz do repositório como **Root Directory**, selecione **Other** como framework e deixe a **Build Command** substituída e vazia para não executar um build. Como não existe pasta `public`, a saída estática deve apontar para `.` (raiz do projeto). Não configure `dist` ou `public` como diretório de saída.

Consulte a [documentação da Vercel sobre configuração de build](https://vercel.com/docs/builds/configure-a-build) para os detalhes da opção **Other** e projetos sem build.

## Testar localmente

Na raiz do projeto, execute:

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000`.
