import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "Marvel Discord Staff Docs",
	tagline: "Watchers of the House of Ideas",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://your-docusaurus-site.example.com",
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
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/Rocked03/marvel-discord-docs",
					routeBasePath: "/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/icon-red-filled-square.svg",
		navbar: {
			title: "Marvel Discord",
			logo: {
				alt: "My Site Logo",
				src: "img/icon-red-filled-square.svg",
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
							label: "Moderation server",
							href: "https://discord.com/channels/915931105977319455/915931106426097716",
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
