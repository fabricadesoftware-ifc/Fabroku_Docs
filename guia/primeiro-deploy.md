# Primeiro deploy

## Antes de começar

- Um repositório no GitHub com o projeto.
- Login no [painel](https://fabroku.fabricadesoftware.ifc.edu.br) com a conta GitHub.

## 1. Prepare o repositório

Cada tipo de projeto precisa de alguns arquivos na raiz. A CLI cria os que faltam:

```bash
npm i -g fabroku
fabroku login
cd meu-projeto
fabroku verify --fix
```

A lista de arquivos de cada tipo está nos guias de [Django](/guia/django) e [Vue / Vite](/guia/frontend).

## 2. Envie para o GitHub

O Fabroku baixa o código do GitHub. Alterações que estão só no seu computador não vão para o deploy.

```bash
git add .
git commit -m "prepara deploy"
git push origin main
```

## 3. Crie o app no painel

1. Abra o projeto ou crie um.
2. Clique em **Novo app**, cole a URL do repositório e escolha a branch.
3. Se o app usa banco, crie o serviço em **Criar serviço → PostgreSQL**.
4. Configure as variáveis de ambiente (`SECRET_KEY`, `DEBUG`...).
5. Clique em **Deploy** e acompanhe o log.

## 4. Próximos deploys

Depois de cada `git push`:

```bash
fabroku deploy
```

Com o [webhook](/cli/webhook) configurado, o push já dispara o deploy e o resultado aparece no commit do GitHub.
