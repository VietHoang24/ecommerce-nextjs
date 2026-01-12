"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BadgeCount } from "@/components/atoms/badge-count"
import { useCart } from "@/components/providers/cart-provider"

export function CartButton() {
  const { totalItems } = useCart()

  return (
    <Button variant="ghost" size="icon" className="relative h-9 w-9" asChild>
      <Link href="/cart">
        <ShoppingCart className="h-5 w-5" />
        <BadgeCount count={totalItems} />
        <span className="sr-only">Giỏ hàng ({totalItems} sản phẩm)</span>
      </Link>
    </Button>
  )
}
