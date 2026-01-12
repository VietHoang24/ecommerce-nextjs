"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PriceDisplay } from "@/components/atoms/price-display"
import { CouponInput } from "@/components/molecules/coupon-input"
import { useCart } from "@/components/providers/cart-provider"

export function CartSummary() {
  const { items, totalPrice, discount } = useCart()
  const discountAmount = Math.round(totalPrice * (discount / 100))
  const finalPrice = totalPrice - discountAmount

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tóm tắt đơn hàng</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CouponInput />
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tổng giá gốc</span>
            <PriceDisplay amount={totalPrice} />
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Giảm giá ({discount}%)</span>
              <span className="text-success">
                -<PriceDisplay amount={discountAmount} />
              </span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Phí hệ thống</span>
            <span className="text-success">Miễn phí</span>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Tổng thanh toán</span>
          <PriceDisplay amount={finalPrice} size="lg" className="text-primary" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg" disabled={items.length === 0} asChild>
          <Link href="/checkout">Tiến hành thanh toán</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
