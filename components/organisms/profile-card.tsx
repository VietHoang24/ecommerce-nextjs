"use client"

import Image from "next/image"
import Link from "next/link"
import { Wallet, Package, History } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PriceDisplay } from "@/components/atoms/price-display"
import { useAuth } from "@/components/providers/auth-provider"

export function ProfileCard() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <Card>
      <CardHeader className="pb-0">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-24 w-24 rounded-full overflow-hidden bg-muted mb-4">
            <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
          </div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="p-4 bg-primary/10 rounded-lg text-center mb-6">
          <p className="text-sm text-muted-foreground mb-1">Số dư ví</p>
          <PriceDisplay amount={user.balance} size="lg" className="text-primary" />
        </div>

        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
            <Link href="/wallet">
              <Wallet className="h-4 w-4" />
              Nạp tiền
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
            <Link href="/my-services">
              <Package className="h-4 w-4" />
              Dịch vụ của tôi
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" asChild>
            <Link href="/orders">
              <History className="h-4 w-4" />
              Lịch sử đơn hàng
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
