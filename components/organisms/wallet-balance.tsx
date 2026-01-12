"use client"

import { Wallet } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PriceDisplay } from "@/components/atoms/price-display"
import { useAuth } from "@/components/providers/auth-provider"

export function WalletBalance() {
  const { user } = useAuth()

  return (
    <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Wallet className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm opacity-80">Số dư hiện tại</p>
            <PriceDisplay amount={user?.balance ?? 0} size="lg" className="text-primary-foreground" />
          </div>
        </div>
        <p className="text-xs opacity-70">Số dư có thể dùng để thanh toán tất cả dịch vụ trên AccountMart</p>
      </CardContent>
    </Card>
  )
}
