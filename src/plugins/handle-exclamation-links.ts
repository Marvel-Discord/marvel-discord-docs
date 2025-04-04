import type { Plugin } from "unified";
import type { Root, Paragraph, Text, Link } from "mdast";
import { visit } from "unist-util-visit";

export const handleExclamationLinksPlugin: Plugin<[], Root> = () => {
	return (tree) => {
		visit(tree, "paragraph", (node: Paragraph) => {
			for (let i = 0; i < node.children.length - 1; i++) {
				const current = node.children[i];
				const next = node.children[i + 1];

				// Ensure current is text and next is a link
				if (current.type === "text" && next.type === "link") {
					if (current.value.endsWith("!")) {
						// Remove the trailing "!" from the text node
						current.value = current.value.slice(0, -1);

						// Update the link node so its text matches its URL
						(next as Link).children = [
							{ type: "text", value: next.url } as Text,
						];
					}
				}
			}
		});
	};
};
