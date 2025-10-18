import React from "react";
import { cn } from "@/components/libs/utils";
import { badgeVariants } from "@/components/libs/badge-variants";

export function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
