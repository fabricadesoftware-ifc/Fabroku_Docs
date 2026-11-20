# Procfile e processos

O `Procfile` lista os comandos do app, um por linha, no formato `tipo: comando`. Ele fica na raiz do repositório.

```txt
web: gunicorn config.wsgi:application --log-file -
worker: celery -A config worker -l info
release: python manage.py migrate --noinput
```

## `web`

Recebe as requisições HTTP. Precisa de pelo menos 1 réplica.

Para parar o app, use o botão **Parar** no painel. Colocar `web=0` na tela de Processos não é o jeito certo.

## `worker`

Processo contínuo para tarefas em segundo plano, como o Celery. Se você adicionar um worker a um app que já existe, faça um novo deploy e depois ajuste a escala na tela de **Processos**.

## `release`

Roda uma vez em cada deploy, antes da versão nova entrar no ar. Serve para migrations. Ele termina e não aparece como processo.

::: warning
Se o comando do `release` demorar muito ou esperar uma resposta do teclado, o deploy fica parado esperando por ele.
:::
