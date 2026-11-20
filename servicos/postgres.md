# PostgreSQL e PostGIS

## Criar e vincular

No app, clique em **Criar serviço → PostgreSQL** ou **PostGIS**. O Fabroku cria o banco, vincula ao app e reinicia o app.

## Variáveis

O primeiro banco vinculado ganha `DATABASE_URL`. Os outros ganham um nome baseado no nome do serviço:

```bash
# Banco principal
DATABASE_URL=postgres://...

# Banco adicional
MAPAS_DB_URL=postgres://...
```

## PostGIS

PostgreSQL com a extensão `postgis` ativada, para dados geográficos. No GeoDjango:

```python
# settings.py
DATABASES = {
    'default': dj_database_url.config(engine='django.contrib.gis.db.backends.postgis'),
}
```

## Acessar o banco

```bash
fabroku db connect
```

Abre um `psql` no banco do app. Detalhes em [db connect](/cli/db).

::: danger
Excluir o serviço apaga o banco e os dados. Se for o banco principal, o banco mais antigo que sobrar passa a ser o `DATABASE_URL`.
:::
