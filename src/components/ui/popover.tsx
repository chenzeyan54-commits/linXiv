import * as RadixPopover from "@radix-ui/react-popover";
import type { ComponentPropsWithoutRef } from "react";

export const Popover = RadixPopover.Root;
export const PopoverTrigger = RadixPopover.Trigger;

/** Portaled panel; Radix handles Escape, outside click, and focus return. */
export function PopoverContent({
  className = "",
  style,
  sideOffset = 8,
  ...rest
}: ComponentPropsWithoutRef<typeof RadixPopover.Content>) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        sideOffset={sideOffset}
        collisionPadding={8}
        className={["lx-rise-corner z-50 overflow-y-auto", className].join(" ")}
        style={{
          maxHeight: "var(--radix-popover-content-available-height)",
          backgroundColor: "var(--color-panel)",
          border: "1px solid var(--color-border)",
          color: "var(--color-text)",
          borderRadius: 12,
          boxShadow: "0 16px 48px rgba(0,0,0,0.28)",
          ...style,
        }}
        {...rest}
      />
    </RadixPopover.Portal>
  );
}
