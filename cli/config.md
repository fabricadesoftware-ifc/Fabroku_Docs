# fabroku config

Tema e opções de interface da CLI. No terminal, `fabroku apps` e `fabroku deploy` mostram tabela, etapas com spinner e barra de progresso nas cores do tema.

```bash
fabroku config
```

Abre uma tela com o menu à esquerda e uma prévia à direita. Use as setas para passar pelos temas: a prévia muda de cor na hora. Enter escolhe, Esc volta.

## Pelo comando

```bash
fabroku config set tema tokyo-night
fabroku config set interface simples
fabroku config set animacoes false
fabroku config set unicode nao
fabroku config temas     # lista os 41 temas
fabroku config list      # mostra as opções atuais
fabroku config reset     # volta ao padrão
```

| Opção | Valores | Padrão |
|---|---|---|
| `tema` | um dos nomes de `fabroku config temas` | `fabroku` |
| `interface` | `auto`, `rica`, `simples` | `auto` |
| `animacoes` | `true`, `false` | `true` |
| `unicode` | `auto`, `sim`, `nao` | `auto` |

As opções ficam em `~/.fabroku/config.json`, na chave `ui`.

## Quando a saída é texto simples

Com `interface: auto`, a CLI usa texto simples quando não há terminal: saída redirecionada (`fabroku apps > apps.txt`), CI, uma IA rodando o comando e o `fabroku mcp`. Para forçar texto simples numa execução só:

```bash
FABROKU_UI=simples fabroku deploy
```

Se o terminal mostrar caracteres estranhos no lugar de ✓ e das bordas, use `fabroku config set unicode nao`.
