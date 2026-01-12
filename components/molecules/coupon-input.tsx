"use client"

import { useState } from "react"
import { Tag, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/providers/cart-provider"

export function CouponInput() {
  const { coupon, discount, applyCoupon, removeCoupon } = useCart()
  const [code, setCode] = useState("")
  const [error, setError] = useState("")

  const handleApply = () => {
    if (!code.trim()) return
    const success = applyCoupon(code.trim().toUpperCase())
    if (success) {
      setCode("")
      setError("")
    } else {
      setError("Mã giảm giá không hợp lệ")
    }
  }

  if (coupon) {
    return (
      <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">{coupon}</span>
          <span className="text-sm text-muted-foreground">(-{discount}%)</span>
        </div>
        <Button variant="ghost" size="sm" onClick={removeCoupon} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          placeholder="Nhập mã giảm giá"
          value={code}
          onChange={(e) => {
            setCode(e.target.value)
            setError("")
          }}
          className="flex-1"
        />
        <Button variant="outline" onClick={handleApply}>
          Áp dụng
        </Button>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
