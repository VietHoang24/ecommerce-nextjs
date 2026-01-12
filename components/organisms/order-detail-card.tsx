"use client"

import { useState } from "react"
import { Copy, Check, Eye, EyeOff, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { StatusBadge } from "@/components/atoms/status-badge"
import { PriceDisplay } from "@/components/atoms/price-display"
import type { Order } from "@/lib/mock-data"

interface OrderDetailCardProps {
  order: Order
}

export function OrderDetailCard({ order }: OrderDetailCardProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const formattedDate = new Date(order.createdAt).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Order Info */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Đơn hàng #{order.id}</CardTitle>
              <CardDescription>{formattedDate}</CardDescription>
            </div>
            <StatusBadge status={order.status} />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>
                  {item.serviceName} ({item.planName})
                </span>
                <PriceDisplay amount={item.price} />
              </div>
            ))}
          </div>
          <Separator />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tổng giá gốc</span>
              <PriceDisplay amount={order.totalAmount} />
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Giảm giá</span>
                <span className="text-success">
                  -<PriceDisplay amount={order.discount} />
                </span>
              </div>
            )}
            <div className="flex justify-between font-semibold">
              <span>Tổng thanh toán</span>
              <PriceDisplay amount={order.finalAmount} className="text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Credentials (if success) */}
      {order.status === "success" && order.credentials && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Thông tin tài khoản</CardTitle>
            <CardDescription>Sao chép thông tin bên dưới để đăng nhập dịch vụ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="font-mono text-sm">{order.credentials.email}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(order.credentials!.email, "email")}
                  className="shrink-0"
                >
                  {copied === "email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Mật khẩu</p>
                  <p className="font-mono text-sm">{showPassword ? order.credentials.password : "••••••••••••"}</p>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(order.credentials!.password, "password")}
                  >
                    {copied === "password" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="p-3 bg-secondary rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Hạn sử dụng</p>
                <p className="font-medium">{new Date(order.credentials.expireAt).toLocaleDateString("vi-VN")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Failure reason */}
      {order.status === "failed" && order.failureReason && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{order.failureReason}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}
