import { cn } from "@/lib/utils"

type Status =
  | "available"
  | "outOfStock"
  | "pending"
  | "paid"
  | "success"
  | "failed"
  | "refunded"
  | "active"
  | "expiring"
  | "expired"

interface StatusBadgeProps {
  status: Status
  className?: string
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  available: { label: "Còn hàng", className: "bg-success/10 text-success" },
  outOfStock: { label: "Hết hàng", className: "bg-destructive/10 text-destructive" },
  pending: { label: "Chờ xử lý", className: "bg-warning/10 text-warning" },
  paid: { label: "Đã thanh toán", className: "bg-primary/10 text-primary" },
  success: { label: "Thành công", className: "bg-success/10 text-success" },
  failed: { label: "Thất bại", className: "bg-destructive/10 text-destructive" },
  refunded: { label: "Đã hoàn tiền", className: "bg-muted text-muted-foreground" },
  active: { label: "Còn hạn", className: "bg-success/10 text-success" },
  expiring: { label: "Sắp hết hạn", className: "bg-warning/10 text-warning" },
  expired: { label: "Hết hạn", className: "bg-destructive/10 text-destructive" },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  )
}
