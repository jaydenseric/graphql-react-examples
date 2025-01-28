// @ts-check

/** @import { ReactNode } from "react" */

import { createElement as h } from "react";

export const css = new Set([
  "/components/Header.css",
]);

/**
 * React component for a header.
 * @param {object} props Props.
 * @param {ReactNode} props.children Children.
 */
export default function Header({ children }) {
  return h("header", { className: "Header__header" }, children);
}
