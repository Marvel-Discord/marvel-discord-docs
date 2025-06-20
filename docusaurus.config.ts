import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { handleExclamationLinksPlugin } from "./src/plugins/handle-exclamation-links";
import { handleMentionLinksPlugin } from "./src/plugins/handle-mention-links";
import remarkGfm from "remark-gfm";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Marvel Discord Staff Docs",
  tagline: "Watchers of the House of Ideas",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.marvelcord.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Rocked03", // Usually your GitHub org/user name.
  projectName: "marvel-discord-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          breadcrumbs: true,
          editUrl: "https://github.com/Rocked03/marvel-discord-docs/blob/main/",
          remarkPlugins: [
            remarkGfm,
            handleExclamationLinksPlugin,
            handleMentionLinksPlugin,
          ],
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/Logo.svg",
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Marvel Discord",
      logo: {
        alt: "Marvel Discord logo",
        src: "img/Logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "moderation",
          position: "left",
          label: "Moderation",
        },
        {
          type: "docSidebar",
          sidebarId: "management",
          position: "left",
          label: "Management",
        },
        {
          href: "https://github.com/Rocked03/marvel-discord-docs",
          label: "Docs Source",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Moderation docs",
              to: "/moderation",
            },
            {
              label: "Management docs",
              to: "/management",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Marvel Discord invite",
              href: "https://discord.gg/marvel",
            },
            {
              label: "Post Office invite",
              href: "https://discord.gg/ppm8DXZxKp",
            },
            {
              label: "Moderation Hub",
              href: "https://discord.com/channels/915931105977319455/915931106426097716",
            },
            {
              label: "Home webpage",
              href: "https://marvelcord.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Discord Web Page",
              href: "https://discord.com/servers/marvel-discord-281648235557421056",
            },
            {
              label: "GitHub",
              href: "https://github.com/Rocked03/marvel-discord-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Marvel Discord. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
