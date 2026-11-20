# fabroku deploy e apps

## `fabroku deploy`

Faz um novo deploy do app com o último commit da branch no GitHub.

```bash
# Na pasta do repositório (descobre o app pelo git remote)
fabroku deploy

# Escolhendo o app
fabroku deploy --app meu-app

# Sem verificar arquivos e sem esperar terminar
fabroku deploy --skip-verify --no-wait
```

| Opção | O que faz | Padrão |
|---|---|---|
| `-a, --app <nome>` | Nome ou ID do app | descobre pelo git |
| `-d, --dir <pasta>` | Pasta do projeto | pasta atual |
| `--skip-verify` | Pula o `fabroku verify` | desligado |
| `--no-wait` | Não espera o deploy terminar | desligado |

Sem `--app`, a CLI procura o app cuja URL de repositório bate com o `git remote origin`. Antes do deploy ela roda o `fabroku verify`; depois mostra o progresso e, no fim, o endereço do app ou o erro.

## `fabroku apps`

Lista os seus apps.

```bash
fabroku apps
fabroku apps --project 42
```

| Status | Significado |
|---|---|
| `RUNNING` | No ar |
| `STOPPED` | Parado |
| `DEPLOYING` | Em deploy |
| `STARTING` / `RESTARTING` | Subindo |
| `ERROR` | Falhou, veja os logs |
| `DELETING` | Sendo apagado |
