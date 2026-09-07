"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import Link from "next/link";

type HomeLinkProps = Pick<
  ComponentPropsWithoutRef<"a">,
  "children" | "className" | "aria-label"
>;

export function HomeLink(props: HomeLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      window.location.pathname !== "/"
    ) {
      return;
    }

    event.preventDefault();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0 });
  }

  return <Link {...props} href="/" onClick={handleClick} />;
}
