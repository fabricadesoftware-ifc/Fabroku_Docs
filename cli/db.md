# fabroku db connect

Abre um `psql` no PostgreSQL ou PostGIS vinculado ao app. O Fabroku registra a sessão.

```bash
fabroku db connect
fabroku db connect --app minha-api
fabroku db connect --app minha-api --service mapas-db
```

| Opção | O que faz | Padrão |
|---|---|---|
| `-a, --app <nome>` | Nome ou ID do app | descobre pelo git |
| `-d, --dir <pasta>` | Pasta usada para descobrir o app | pasta atual |
| `-s, --service <nome>` | Qual banco, se o app tiver mais de um | — |
