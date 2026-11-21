# Backend Django

## Arquivos necessários

Na raiz do repositório:

| Arquivo | Para quê |
|---|---|
| `requirements.txt` | Dependências Python |
| `.python-version` | Versão do Python, só o número: `3.13` (com `python-` na frente o deploy falha) |
| `Procfile` | Comandos que o app roda (web, worker, release) |

::: code-group

```txt [requirements.txt]
django>=5.2
gunicorn
dj-database-url
psycopg[binary]
whitenoise
```

```txt [.python-version]
3.13
```

```txt [Procfile]
web: gunicorn config.wsgi:application --log-file -
release: python manage.py migrate --noinput
```

:::

## Banco de dados

Crie um serviço PostgreSQL no painel e vincule ao app. O Fabroku configura a variável `DATABASE_URL`:

```python
# settings.py
import dj_database_url

DATABASES = {
    'default': dj_database_url.config(conn_max_age=600),
}
```

Mais detalhes em [PostgreSQL e PostGIS](/servicos/postgres).

## Arquivos estáticos e uploads

Os estáticos (CSS, JS do admin) podem ser servidos pelo [WhiteNoise](https://whitenoise.readthedocs.io).

Os uploads dos usuários não podem ficar no disco do app, porque o container é recriado a cada deploy e os arquivos se perdem. Use o [Armazenamento S3](/servicos/s3).

## Migrations e superusuário

A linha `release` do `Procfile` roda as migrations em cada deploy. Para criar o usuário admin:

```bash
fabroku run createsuperuser
```

Veja todos os comandos em [run (rotinas Django)](/cli/run).
