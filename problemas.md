# Problemas comuns

## Login e acesso

| Problema | Solução |
|---|---|
| "Não autenticado" | `fabroku login` |
| Token expirado ou inválido | `fabroku login` de novo |
| Login demorou mais de 2 minutos | Confira se o navegador abriu e tente de novo |
| A IA não conecta no MCP | Instale a CLI globalmente, faça `fabroku login` e reinicie a ferramenta de IA |

## Deploy

| Problema | Solução |
|---|---|
| Tipo de projeto não detectado | `fabroku verify --type frontend` ou `--type backend` |
| Faltam arquivos | `fabroku verify --fix` |
| `requirements.txt` não existe | `pip freeze > requirements.txt` |
| "Nenhum app encontrado" | Confira `git remote -v` ou use `--app <nome>` |
| HTTP 409 | Já tem um deploy em andamento, espere terminar |
| Deploy passou de 10 minutos | Veja o log no painel |
| Mudei e não apareceu | Faltou `git push`. O deploy usa o que está no GitHub |

## Dados

| Problema | Solução |
|---|---|
| Fixture não encontrado | O arquivo precisa estar no repositório publicado; faça deploy antes do `loaddata` |
| `dumpdata` sem `--output` | Informe `--output ./arquivo.json` |
| Uploads somem depois do deploy | Use o [Armazenamento S3](/servicos/s3) |

## Webhook

| Problema | Solução |
|---|---|
| Push não dispara deploy | `fabroku webhook <id> --test` para diagnosticar |
