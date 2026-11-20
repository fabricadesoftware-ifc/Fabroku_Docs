# fabroku run (rotinas Django)

Roda comandos do `manage.py` dentro do container do app. Todos aceitam:

| Opção | O que faz | Padrão |
|---|---|---|
| `-a, --app <nome>` | Nome ou ID do app | descobre pelo git |
| `-d, --dir <pasta>` | Pasta usada para descobrir o app | pasta atual |
| `--manage <caminho>` | Onde está o `manage.py` | `manage.py` |

A CLI espera até 12 minutos pelo resultado de cada comando.

## `run migrate`

```bash
fabroku run migrate
fabroku run migrate --manage src/manage.py --noinput
```

## `run createsuperuser`

O terminal pergunta usuário, email e senha. A senha não aparece enquanto você digita.

```bash
fabroku run createsuperuser
```

## `run loaddata`

Carrega um fixture JSON que já foi para o deploy. Se você criou ou mudou o arquivo, faça deploy antes.

```bash
fabroku run loaddata ./fixtures/users.json --django
```

## `run dumpdata`

Gera o JSON no container e salva no caminho local de `--output`.

```bash
fabroku run dumpdata --django --output ./dump.json
fabroku run dumpdata --django --output ./users.json -- --indent 2 auth.User
```

Os argumentos do Django vão depois de `--`.
