// @ts-check

/** @import { ReactNode } from "react" */

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import { createElement as h } from "react";

export const css = new Set([
  ...cssHeading,
  "/components/ErrorMessage.css",
]);

/**
 * React component for an error message.
 * @param {object} props Props.
 * @param {string} props.heading Heading.
 * @param {ReactNode} [props.children] Children.
 */
export default function ErrorMessage({ heading, children }) {
  return h(
    "aside",
    { className: "ErrorMessage__aside" },
    h(Heading, null, heading),
    children,
  );
}
