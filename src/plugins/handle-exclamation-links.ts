import type { Plugin } from "unified";
import type { Root, Paragraph, Text, Link } from "mdast";
import { visit } from "unist-util-visit";

export const handleExclamationLinksPlugin: Plugin<[], Root> = () => {
	return (tree) => {
		visit(tree, "paragraph", (node: Paragraph) => {
			for (let i = 0; i < node.children.length - 1; i++) {
				const current = node.children[i];
				const next = node.children[i + 1];

				if (current.type === "text" && next.type === "link") {
					// Ensure current is text and next is a link
					if (current.value.endsWith("!")) {
						current.value = current.value.slice(0, -1);

						(next as Link).children = [
							{ type: "text", value: next.url } as Text,
						];
					}
				}

				if (
					current.type === "link" &&
					current.children.length === 1 &&
					current.children[0].type === "text" &&
					current.url &&
					current.url.startsWith("!")
				) {
					current.url = current.url.slice(1);
				}
			}
		});
	};
};
