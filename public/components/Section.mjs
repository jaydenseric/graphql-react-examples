// @ts-check

import { createElement as h } from "react";

export const css = new Set([
  "/components/Section.css",
]);

/**
 * React component for a section.
 * @param {object} props Props.
 * @param {import("react").ReactNode} props.children Children.
 */
export default function Section({ children }) {
  return h("section", { className: "Section__section" }, children);
}
