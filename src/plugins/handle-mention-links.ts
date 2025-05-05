import type { Plugin } from "unified";
import type { Root, Paragraph } from "mdast";
import { visit } from "unist-util-visit";

interface Prefix {
	prefix: string;
	viewedAs: string;
	url: (prefix: Prefix, linkName: string, linkUrl: string) => string;
}

export const handleMentionLinksPlugin: Plugin<[], Root> = () => {
	const validPrefixes: Prefix[] = [
		{
			prefix: "#",
			viewedAs: "#",
			url: (_p, _name, url) =>
				`https://discord.com/channels/281648235557421056/${url}`,
		},
		{
			prefix: "@",
			viewedAs: "@",
			url: (_p, _name, url) => `https://discord.com/users/${url}`,
		},
		{
			prefix: "@&",
			viewedAs: "@",
			url: () => "#",
		},
	];
	return (tree) => {
		visit(tree, ["paragraph", "heading", "tableCell"], (node) => {
			let children: Paragraph["children"];
			switch (node.type) {
				case "paragraph":
					children = node.children;
					break;
				case "heading":
					children = node.children;
					break;
				case "tableCell":
					children = node.children;
					break;
				default:
					return;
			}

			if (node.type === "tableCell") {
				console.log(children);
			}

			for (let i = 0; i < node.children.length - 1; i++) {
				const current = node.children[i];
				const next = node.children[i + 1];

				if (current.type === "text" && next.type === "link") {
					const textValue = current.value;

					if (next.children[0]?.type === "text") {
						const linkName = next.children[0].value;
						const linkUrl = next.url;

						for (const prefix of validPrefixes) {
							if (linkName && textValue.endsWith(prefix.prefix)) {
								current.value = textValue.slice(0, -prefix.prefix.length);

								node.children[i + 1] = {
									type: "link",
									title: null,
									url: prefix.url(prefix, linkName, linkUrl),
									children: [
										{
											type: "text",
											value: `${prefix.viewedAs}${linkName}`,
										},
									],
									data: {
										hProperties: { class: "mention" },
									},
								};

								break;
							}
						}
					}
				}
			}
		});
	};
};
