# Instalação e login

Precisa do Node.js 18 ou mais novo.

```bash
npm i -g fabroku
```

## `fabroku login`

Abre o navegador para entrar com o GitHub e salva o token em `~/.fabroku/config.json`.

```bash
fabroku login
```

## `fabroku whoami`

Mostra quem está logado e se o token ainda é válido.

```bash
$ fabroku whoami
Logado como: fulano
   API: https://api.exemplo.com
   Email: fulano@example.com
   🏭 Membro da Fábrica
   ✅ Token válido
```

## `fabroku logout`

Apaga o token salvo.

```bash
fabroku logout
```

::: warning
Quem tiver o `~/.fabroku/config.json` entra no Fabroku como você. Não compartilhe e não faça commit desse arquivo.
:::
