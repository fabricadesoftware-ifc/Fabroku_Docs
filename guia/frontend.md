# Frontend Vue / Vite

Para SPAs feitas com Vue, React ou outro projeto Vite.

## Arquivos necessários

| Arquivo | Para quê |
|---|---|
| `package.json` | Precisa ter o script `build` |
| `.buildpacks` | Marca o app como site estático (Node + Nginx) |
| `static.json` | Pasta publicada e rotas da SPA |

::: code-group

```txt [.buildpacks]
https://github.com/heroku/heroku-buildpack-nodejs
https://github.com/dokku/buildpack-nginx
```

```json [static.json]
{
  "root": "dist/",
  "routes": { "/**": "index.html" }
}
```

:::

O `fabroku verify --fix` cria esses arquivos.

## Variáveis de ambiente

O Vite lê variáveis como `VITE_API_URL` durante o build. Depois de mudar uma delas no painel, faça um novo deploy.

```js
const api = import.meta.env.VITE_API_URL
```

## Como o Fabroku publica

O Fabroku roda o `build` com Node e copia só a pasta final para um Nginx. A imagem do app fica com uns 50 MB; com o Node e o `node_modules` junto ficava acima de 1 GB. Qualquer rota da SPA (`/login`, `/produtos/3`) devolve o `index.html`.

Se o repositório tiver um `Dockerfile`, o Fabroku usa esse `Dockerfile` e não gera outro.

Para voltar ao build antigo, com buildpacks, configure `FABROKU_STATIC_BUILD=0` no app e faça um novo deploy.
