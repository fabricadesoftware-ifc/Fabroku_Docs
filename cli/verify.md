# fabroku verify

Confere se o projeto tem os arquivos que o deploy precisa e, com `--fix`, cria os que faltam.

```bash
fabroku verify
fabroku verify --fix
fabroku verify --type backend --fix
```

## Opções

| Opção | O que faz | Padrão |
|---|---|---|
| `-d, --dir <pasta>` | Pasta do projeto | pasta atual |
| `-t, --type <tipo>` | Força `frontend` ou `backend` | detecta sozinho |
| `--fix` | Cria os arquivos que faltam | desligado |

## Como o tipo é detectado

- **Frontend**: tem `package.json`.
- **Backend Python**: tem `manage.py`, `requirements.txt`, `setup.py`, `pyproject.toml` ou `Pipfile`.
- **Backend Node**: tem `package.json` **e** um `Procfile` que chama `node` ou `npm`.

## O que é verificado

::: code-group

```txt [Frontend]
.buildpacks    Node.js + Nginx
.static        marca o app como estático
static.json    pasta publicada e rotas da SPA
```

```txt [Backend Django]
Procfile          processos web, worker e release
requirements.txt  dependências Python
.python-version   versão do Python
```

:::
