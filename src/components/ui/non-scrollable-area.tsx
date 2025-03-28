
import React from "react"
import { cn } from "@/lib/utils"

const NonScrollableArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <div className="h-full w-full rounded-[inherit]">
      {children}
    </div>
  </div>
))
NonScrollableArea.displayName = "NonScrollableArea"

export { NonScrollableArea }
