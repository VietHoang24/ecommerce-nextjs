import { ArrowUpRight, ArrowDownRight, RotateCcw } from "lucide-react"
import { PriceDisplay } from "@/components/atoms/price-display"
import { cn } from "@/lib/utils"
import type { WalletTransaction } from "@/lib/mock-data"

interface TransactionItemProps {
  transaction: WalletTransaction
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const formattedDate = new Date(transaction.createdAt).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const iconMap = {
    topup: ArrowDownRight,
    purchase: ArrowUpRight,
    refund: RotateCcw,
  }

  const colorMap = {
    topup: "text-success bg-success/10",
    purchase: "text-destructive bg-destructive/10",
    refund: "text-primary bg-primary/10",
  }

  const Icon = iconMap[transaction.type]

  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
      <div
        className={cn("h-10 w-10 rounded-full flex items-center justify-center shrink-0", colorMap[transaction.type])}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm truncate">{transaction.description}</p>
        <p className="text-xs text-muted-foreground">{formattedDate}</p>
      </div>
      <PriceDisplay
        amount={transaction.amount}
        className={cn("font-semibold shrink-0", transaction.amount > 0 ? "text-success" : "text-destructive")}
      />
    </div>
  )
}
