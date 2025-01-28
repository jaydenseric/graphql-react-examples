// @ts-check

/** @import { ReactNode } from "react" */

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import { createElement as h } from "react";

import PageHeader, { css as cssHeader } from "./Header.mjs";

export const css = new Set([
  ...cssHeading,
  ...cssPara,
  ...cssHeader,
]);

/**
 * React component for a page error.
 * @param {object} props Props.
 * @param {string} props.title Title.
 * @param {ReactNode} props.description Description.
 */
export default function PageError({ title, description }) {
  return h(
    PageHeader,
    null,
    h(Heading, null, title),
    h(Para, null, description),
  );
}
