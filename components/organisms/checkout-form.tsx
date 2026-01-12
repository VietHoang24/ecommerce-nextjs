"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AlertCircle, Wallet, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { PriceDisplay } from "@/components/atoms/price-display"
import { useCart } from "@/components/providers/cart-provider"
import { useAuth } from "@/components/providers/auth-provider"

export function CheckoutForm() {
  const router = useRouter()
  const { user, updateBalance } = useAuth()
  const { items, totalPrice, discount, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const discountAmount = Math.round(totalPrice * (discount / 100))
  const finalPrice = totalPrice - discountAmount
  const hasEnoughBalance = (user?.balance ?? 0) >= finalPrice

  const handleCheckout = async () => {
    if (!hasEnoughBalance || !user) return

    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    updateBalance(-finalPrice)
    clearCart()
    setSuccess(true)
    setIsProcessing(false)

    // Redirect to orders after 2s
    setTimeout(() => {
      router.push("/orders")
    }, 2000)
  }

  if (success) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thanh toán thành công!</h3>
            <p className="text-muted-foreground">Đang chuyển hướng đến trang đơn hàng...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Xác nhận thanh toán</CardTitle>
        <CardDescription>Kiểm tra thông tin đơn hàng và thanh toán bằng số dư ví</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Order Items */}
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>
                {item.serviceName} ({item.planDuration})
              </span>
              <PriceDisplay amount={item.price} />
            </div>
          ))}
        </div>
        <Separator />

        {/* Summary */}
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
          <div className="flex justify-between font-semibold">
            <span>Tổng thanh toán</span>
            <PriceDisplay amount={finalPrice} size="lg" className="text-primary" />
          </div>
        </div>
        <Separator />

        {/* Wallet Balance */}
        <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            <span className="font-medium">Số dư ví</span>
          </div>
          <PriceDisplay amount={user?.balance ?? 0} className="font-semibold" />
        </div>

        {/* Warning if not enough balance */}
        {!hasEnoughBalance && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Số dư không đủ. Vui lòng nạp thêm{" "}
              <PriceDisplay amount={finalPrice - (user?.balance ?? 0)} className="font-semibold" /> để thanh toán.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        {hasEnoughBalance ? (
          <Button className="w-full" size="lg" onClick={handleCheckout} disabled={isProcessing}>
            {isProcessing ? "Đang xử lý..." : "Xác nhận thanh toán"}
          </Button>
        ) : (
          <Button className="w-full" size="lg" asChild>
            <Link href="/wallet">Nạp tiền ngay</Link>
          </Button>
        )}
        <Button variant="outline" className="w-full bg-transparent" asChild>
          <Link href="/cart">Quay lại giỏ hàng</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
