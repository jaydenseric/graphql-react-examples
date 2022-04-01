// @ts-check

import { createElement as h, useContext } from "react";
import TransferContext from "ruck/TransferContext.mjs";

import PageError, { css as cssPageError } from "./PageError.mjs";

export const css = new Set([
  ...cssPageError,
]);

/** React component for a page missing error. */
export default function PageErrorMissing() {
  const ruckTransfer = useContext(TransferContext);

  if (ruckTransfer) {
    ruckTransfer.responseInit.status = 404;
    ruckTransfer.responseInit.statusText = "Not Found";
  }

  return h(PageError, {
    title: "Error 404",
    description: "Something is missing.",
  });
}
