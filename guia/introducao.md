# O que é o Fabroku

O Fabroku publica os projetos dos alunos e da Fábrica de Software do IFC Araquari. Você informa o repositório do GitHub e a branch. O Fabroku monta a aplicação, coloca no ar com HTTPS e guarda os logs.

Por baixo ele usa o [Dokku](https://dokku.com), que roda nos servidores da Fábrica.

## Projetos, apps e serviços

```
Projeto  ──┬── App (ex.: minha-api)     ← um repositório + uma branch
           ├── App (ex.: meu-site)
           └── Serviços (banco, Redis, S3)  ← vinculados a um app
```

- **Projeto** reúne os apps de um trabalho e as pessoas que podem mexer neles.
- **App** é um repositório publicado, com um endereço como `minha-api.class.fabricadesoftware.ifc.edu.br`.
- **Serviço** é um banco de dados, um Redis ou um armazenamento S3. Quando você vincula o serviço a um app, o Fabroku grava as variáveis de conexão no app (por exemplo, `DATABASE_URL`).

## Limites

| | Aluno | Membro da Fábrica |
|---|---|---|
| Apps | 3 | 5 |
| Serviços | 2 | 3 |

Um administrador do Fabroku pode aumentar o limite de uma pessoa.

## Painel ou CLI

O [painel web](https://fabroku.fabricadesoftware.ifc.edu.br) faz tudo. A [CLI](/cli/instalacao) faz deploy, roda migrations e abre o banco pelo terminal, e serve para scripts.
