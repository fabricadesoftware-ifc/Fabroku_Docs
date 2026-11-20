---
layout: home

hero:
  name: Fabroku
  text: Deploy de apps da Fábrica de Software
  tagline: A plataforma de deploy mais famosa do IFC. Amada por uns, temida por outros, necessária para todos.
  image:
    src: /logo.svg
    alt: Fabroku
  actions:
    - theme: brand
      text: Primeiro deploy
      link: /guia/primeiro-deploy
    - theme: alt
      text: O que é o Fabroku
      link: /guia/introducao
    - theme: alt
      text: Abrir o painel
      link: https://fabroku.fabricadesoftware.ifc.edu.br

features:
  - title: Deploy a partir do GitHub
    details: Cada app é um repositório e uma branch. Com o webhook, um push dispara o deploy e o resultado aparece no commit.
    link: /guia/primeiro-deploy
  - title: Django e Vue
    details: Quais arquivos cada tipo de projeto precisa e como configurar banco, estáticos e variáveis.
    link: /guia/django
  - title: Bancos e arquivos
    details: PostgreSQL, PostGIS, Redis e S3. Ao vincular, DATABASE_URL e as outras variáveis entram no app.
    link: /servicos/postgres
  - title: CLI e MCP
    details: Deploy, migrations e psql pelo terminal. O MCP dá as mesmas operações para o Claude e o Codex.
    link: /cli/instalacao
---
