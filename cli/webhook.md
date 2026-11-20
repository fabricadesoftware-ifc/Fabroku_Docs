# fabroku webhook

Cria o webhook do GitHub que dispara um deploy a cada push e mostra o resultado no commit.

```bash
fabroku webhook            # lista os apps
fabroku webhook 15         # diagnostica o app 15
fabroku webhook 15 --setup # cria ou recria o webhook
fabroku webhook 15 --test  # testa o status no commit
```

## O que o diagnóstico confere

| Verificação | O que significa |
|---|---|
| `backend_url_public` | O Fabroku está num endereço público |
| `user_git_token` | Seu acesso ao GitHub vale |
| `project_git_token` | Alguém do projeto tem acesso ao GitHub |
| `git_url_parseable` | A URL do repositório é válida |
| `webhook_exists` | O webhook existe, está ativo e escuta push |
| `last_commit` | O último commit foi encontrado |
