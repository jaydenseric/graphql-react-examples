// @ts-check

import { createElement as h, useContext } from "react";
import TransferContext from "ruck/TransferContext.mjs";

import PageError, { css as cssPageError } from "./PageError.mjs";

export const css = new Set([
  ...cssPageError,
]);

/** React component for a page loading error. */
export default function PageErrorLoading() {
  const ruckTransfer = useContext(TransferContext);

  if (ruckTransfer) {
    ruckTransfer.responseInit.status = 500;
    ruckTransfer.responseInit.statusText = "Internal Server Error";
  }

  return h(PageError, {
    title: "Error loading",
    description: "Unable to load.",
  });
}
