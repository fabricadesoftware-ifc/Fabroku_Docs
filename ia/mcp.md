# MCP local

O `fabroku mcp` deixa ferramentas de IA (Claude Desktop, Claude Code, Codex) consultarem e operarem o Fabroku com o seu login e as suas permissões.

## Configurar

Rode `fabroku login` antes. A ferramenta de IA inicia o `fabroku mcp` quando precisa, então não há nada para deixar aberto.

::: code-group

```json [Claude / JSON]
{
  "mcpServers": {
    "fabroku": {
      "command": "fabroku",
      "args": ["mcp"]
    }
  }
}
```

```toml [Codex]
[mcp_servers.fabroku]
command = "fabroku"
args = ["mcp"]
```

:::

## Ferramentas

| Ferramenta | O que faz | Altera algo |
|---|---|---|
| `fabroku_list_projects` | Lista seus projetos | não |
| `fabroku_list_apps` | Lista apps, com filtro por projeto | não |
| `fabroku_get_app` | Estado, repositório, branch, serviços e nomes das variáveis | não |
| `fabroku_list_services` | Lista os serviços | não |
| `fabroku_get_status` | Estado da tarefa atual do app | não |
| `fabroku_get_runtime_logs` | Últimos logs, com dados sensíveis escondidos | não |
| `fabroku_run_migrate` | Roda as migrations | sim |
| `fabroku_redeploy` | Faz deploy do que já está no GitHub | sim |

O `fabroku_redeploy` usa o que está no GitHub. Se a IA mudou o código, ela precisa fazer commit e `git push` antes.
