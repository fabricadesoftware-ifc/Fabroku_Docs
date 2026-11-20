# MCP remoto

Para o Claude ou o Le Chat no navegador, que não conseguem rodar a CLI. Em vez de instalar, você cola um link.

Essa versão só lê. Ela não inicia, para, reinicia, faz deploy nem apaga apps.

## 1. Monte o link

Depois do `fabroku login`, o endereço da API e a sua chave estão em:

```bash
cat ~/.fabroku/config.json
```

O link é:

```
<endereço_da_api>/api/mcp/<sua_chave>/
```

## 2. Cole no assistente

- **Claude** (site ou app): Configurações → Conectores → Adicionar conector personalizado → cole o link.
- **Le Chat**: no campo de conector MCP personalizado.

## O que a IA consegue ver

- Lista de apps, com nome, status, domínio, branch e projeto.
- Status de um app e o progresso da última operação.
- Quantas réplicas de cada processo estão rodando.
- As últimas linhas do log.

::: danger
Quem tiver o link vê o status e os logs dos seus apps. Se ele vazar, peça a um administrador para revogar a chave.
:::
