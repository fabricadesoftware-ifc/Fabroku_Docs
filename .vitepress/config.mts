import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'pt-BR',
  title: 'Fabroku',
  description: 'Documentação do Fabroku, a plataforma de deploy da Fábrica de Software do IFC Araquari',
  cleanUrls: true,
  lastUpdated: false,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  ],
  sitemap: { hostname: 'https://docs.fabroku.fabricadesoftware.ifc.edu.br' },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Fabroku Docs',

    nav: [
      { text: 'Guia', link: '/guia/introducao', activeMatch: '/guia/' },
      { text: 'Serviços', link: '/servicos/postgres', activeMatch: '/servicos/' },
      { text: 'CLI', link: '/cli/instalacao', activeMatch: '/cli/' },
      { text: 'IA (MCP)', link: '/ia/mcp', activeMatch: '/ia/' },
      { text: 'Abrir o painel', link: 'https://fabroku.fabricadesoftware.ifc.edu.br' },
    ],

    sidebar: [
      {
        text: 'Começando',
        items: [
          { text: 'O que é o Fabroku', link: '/guia/introducao' },
          { text: 'Primeiro deploy', link: '/guia/primeiro-deploy' },
        ],
      },
      {
        text: 'Guias por tipo de projeto',
        items: [
          { text: 'Backend Django', link: '/guia/django' },
          { text: 'Frontend Vue / Vite', link: '/guia/frontend' },
          { text: 'Procfile e processos', link: '/guia/procfile' },
        ],
      },
      {
        text: 'Serviços',
        items: [
          { text: 'PostgreSQL e PostGIS', link: '/servicos/postgres' },
          { text: 'Armazenamento S3', link: '/servicos/s3' },
        ],
      },
      {
        text: 'CLI',
        collapsed: true,
        items: [
          { text: 'Instalação e login', link: '/cli/instalacao' },
          { text: 'verify', link: '/cli/verify' },
          { text: 'deploy e apps', link: '/cli/deploy' },
          { text: 'run (rotinas Django)', link: '/cli/run' },
          { text: 'db connect', link: '/cli/db' },
          { text: 'webhook', link: '/cli/webhook' },
        ],
      },
      {
        text: 'Inteligência artificial',
        items: [
          { text: 'MCP local', link: '/ia/mcp' },
          { text: 'MCP remoto', link: '/ia/mcp-remoto' },
          { text: 'llms.txt', link: '/ia/llms' },
        ],
      },
      {
        text: 'Ajuda',
        items: [{ text: 'Problemas comuns', link: '/problemas' }],
      },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
          modal: {
            noResultsText: 'Nada encontrado para',
            resetButtonTitle: 'Limpar',
            footer: { selectText: 'abrir', navigateText: 'navegar', closeText: 'fechar' },
          },
        },
      },
    },

    editLink: {
      pattern: 'https://github.com/fabricadesoftware-ifc/Fabroku_Docs/edit/main/:path',
      text: 'Editar esta página no GitHub',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/fabricadesoftware-ifc' }],
    footer: {
      message: 'Fábrica de Software · IFC Campus Araquari',
      copyright: 'Licença MIT',
    },

    outline: { level: [2, 3], label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próxima' },
    returnToTopLabel: 'Voltar ao topo',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Mudar para o tema claro',
    darkModeSwitchTitle: 'Mudar para o tema escuro',
    notFound: { title: 'Página não encontrada', quote: 'Esse endereço não existe.', linkText: 'Voltar ao início' },
  },
})
