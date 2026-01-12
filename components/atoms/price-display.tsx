import { cn } from "@/lib/utils"

interface PriceDisplayProps {
  amount: number
  currency?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function PriceDisplay({ amount, currency = "đ", className, size = "md" }: PriceDisplayProps) {
  const formatted = new Intl.NumberFormat("vi-VN").format(amount)

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl font-semibold",
  }

  return (
    <span className={cn("text-foreground", sizeClasses[size], className)}>
      {formatted}
      {currency}
    </span>
  )
}
