import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { StatusBadge } from "@/components/atoms/status-badge"
import { PriceDisplay } from "@/components/atoms/price-display"
import type { Order } from "@/lib/mock-data"

interface OrderCardProps {
  order: Order
}

export function OrderCard({ order }: OrderCardProps) {
  const formattedDate = new Date(order.createdAt).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Link href={`/orders/${order.id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm text-muted-foreground">#{order.id}</span>
                <StatusBadge status={order.status} />
              </div>
              <div className="text-sm text-muted-foreground truncate">
                {order.items.map((item) => item.serviceName).join(", ")}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{formattedDate}</div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <PriceDisplay amount={order.finalAmount} className="font-semibold" />
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
