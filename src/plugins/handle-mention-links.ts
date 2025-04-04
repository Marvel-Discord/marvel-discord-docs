import type { Plugin } from "unified";
import type { Root, Paragraph } from "mdast";
import { visit } from "unist-util-visit";

const handleMentionLinksPlugin: Plugin<[], Root> = () => {
	const validPrefixes = ["#", "@", "@&"];

	return (tree) => {
		visit(tree, "paragraph", (node: Paragraph) => {
			for (let i = 0; i < node.children.length - 1; i++) {
				const current = node.children[i];
				const next = node.children[i + 1];

				if (current.type === "text" && next.type === "link") {
					const textValue = current.value;

					if (next.children[0]?.type === "text") {
						const linkName = next.children[0].value;

						for (const prefix of validPrefixes) {
							if (linkName && textValue.endsWith(prefix)) {
								current.value = textValue.slice(0, -prefix.length);

								node.children[i + 1] = {
									type: "link",
									title: null,
									url: "#",
									children: [
										{
											type: "text",
											value: `${prefix}${linkName}`,
										},
									],
									data: {
										hProperties: { class: "mention" },
									},
								};

								// node.children[i + 1] = {
								// 	type: "text",
								// 	value: `${prefix}${linkName}`,
								// };

								// node.children[i + 1].data = {
								// 	hProperties: { class: "mention" },
								// };

								break;
							}
						}
					}
				}
			}
		});
	};
};

export default handleMentionLinksPlugin;
