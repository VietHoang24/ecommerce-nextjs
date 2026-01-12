"use client"

import { useState } from "react"
import { QrCode, CreditCard, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PriceDisplay } from "@/components/atoms/price-display"
import { useAuth } from "@/components/providers/auth-provider"
import { cn } from "@/lib/utils"

const presetAmounts = [100000, 200000, 500000, 1000000, 2000000, 5000000]

export function TopupForm() {
  const { updateBalance } = useAuth()
  const [amount, setAmount] = useState<number>(100000)
  const [customAmount, setCustomAmount] = useState("")
  const [region, setRegion] = useState<"vn" | "intl">("vn")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleAmountSelect = (value: number) => {
    setAmount(value)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    const parsed = Number.parseInt(value.replace(/\D/g, ""), 10)
    if (!isNaN(parsed) && parsed >= 10000) {
      setAmount(parsed)
    }
  }

  const handleTopup = async () => {
    setIsProcessing(true)

    if (region === "vn") {
      // Show QR for Cpay
      setShowQR(true)
      // Simulate payment after 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000))
      setShowQR(false)
    } else {
      // Simulate Stripe redirect
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    updateBalance(amount)
    setSuccess(true)
    setIsProcessing(false)
  }

  if (success) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nạp tiền thành công!</h3>
            <p className="text-muted-foreground mb-4">
              Đã nạp <PriceDisplay amount={amount} className="font-semibold text-primary" /> vào ví của bạn
            </p>
            <Button onClick={() => setSuccess(false)}>Nạp tiếp</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (showQR) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold mb-4">Quét mã QR để thanh toán</h3>
            <div className="w-48 h-48 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
              <QrCode className="h-32 w-32 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Số tiền: <PriceDisplay amount={amount} className="font-semibold" />
            </p>
            <p className="text-sm text-muted-foreground">Mã giao dịch: TXN{Date.now()}</p>
            <p className="text-xs text-muted-foreground mt-4">Đang chờ xác nhận thanh toán...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nạp tiền vào ví</CardTitle>
        <CardDescription>Chọn số tiền và phương thức thanh toán</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Amount Selection */}
        <div className="space-y-3">
          <Label>Chọn số tiền</Label>
          <div className="grid grid-cols-3 gap-2">
            {presetAmounts.map((preset) => (
              <Button
                key={preset}
                variant={amount === preset && !customAmount ? "default" : "outline"}
                onClick={() => handleAmountSelect(preset)}
                className="w-full"
              >
                <PriceDisplay
                  amount={preset}
                  size="sm"
                  className={cn(amount === preset && !customAmount ? "text-primary-foreground" : "")}
                />
              </Button>
            ))}
          </div>
          <div>
            <Label htmlFor="custom-amount" className="text-sm text-muted-foreground">
              Hoặc nhập số tiền khác (tối thiểu 10,000đ)
            </Label>
            <Input
              id="custom-amount"
              placeholder="Nhập số tiền..."
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        {/* Region Selection */}
        <div className="space-y-3">
          <Label>Khu vực</Label>
          <Tabs value={region} onValueChange={(v) => setRegion(v as "vn" | "intl")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vn">🇻🇳 Việt Nam</TabsTrigger>
              <TabsTrigger value="intl">🌍 Quốc tế</TabsTrigger>
            </TabsList>
            <TabsContent value="vn" className="mt-4">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <QrCode className="h-5 w-5 text-primary" />
                  <span className="font-medium">Thanh toán qua Cpay</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Quét mã QR để thanh toán nhanh chóng qua các ngân hàng Việt Nam
                </p>
              </div>
            </TabsContent>
            <TabsContent value="intl" className="mt-4">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <span className="font-medium">Thanh toán qua Stripe</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Thanh toán bằng thẻ Visa, Mastercard, hoặc các phương thức quốc tế khác
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Summary */}
        <div className="p-4 bg-primary/5 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Số tiền nạp</span>
            <PriceDisplay amount={amount} size="lg" className="text-primary font-semibold" />
          </div>
        </div>

        <Button className="w-full" size="lg" onClick={handleTopup} disabled={isProcessing || amount < 10000}>
          {isProcessing ? "Đang xử lý..." : `Nạp ${new Intl.NumberFormat("vi-VN").format(amount)}đ`}
        </Button>
      </CardContent>
    </Card>
  )
}
