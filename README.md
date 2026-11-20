# Fabroku Docs

Documentação do [Fabroku](https://fabroku.fabricadesoftware.ifc.edu.br), publicada em https://docs.fabroku.fabricadesoftware.ifc.edu.br.

Feita com [VitePress](https://vitepress.dev). Cada página é um arquivo Markdown; o menu lateral fica em `.vitepress/config.mts`.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera .vitepress/dist
```

## Escrever

- Uma página por assunto, em pt-BR.
- Comandos e variáveis entre crases (`fabroku deploy`, `DATABASE_URL`).
- Caixas de aviso (`::: warning`, `::: danger`) só para perda de dados, segurança ou algo que trava o deploy.
- Página nova: crie o `.md` na pasta certa e adicione em `sidebar` no `.vitepress/config.mts`.

## Deploy

O app `fabroku-docs` roda no próprio Fabroku (app3). O `static.json` faz o Fabroku compilar o site e servir só a pasta `.vitepress/dist` com Nginx. Para publicar uma mudança, faça merge na `main` e rode no app3:

```bash
dokku git:sync --build fabroku-docs https://github.com/fabricadesoftware-ifc/Fabroku_Docs.git main
```
