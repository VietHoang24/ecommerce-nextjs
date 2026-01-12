"use client"

import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PriceDisplay } from "@/components/atoms/price-display"
import { useCart, type CartItem } from "@/components/providers/cart-provider"

export function CartItemList() {
  const { items, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Giỏ hàng của bạn đang trống</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItemRow key={item.id} item={item} onRemove={() => removeItem(item.id)} />
      ))}
    </div>
  )
}

interface CartItemRowProps {
  item: CartItem
  onRemove: () => void
}

function CartItemRow({ item, onRemove }: CartItemRowProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
      <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted shrink-0">
        <Image src={item.serviceImage || "/placeholder.svg"} alt={item.serviceName} fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium truncate">{item.serviceName}</h4>
        <p className="text-sm text-muted-foreground">
          {item.planName} - {item.planDuration}
        </p>
      </div>
      <PriceDisplay amount={item.price} className="font-semibold shrink-0" />
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0 text-destructive hover:text-destructive"
        onClick={onRemove}
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Xóa</span>
      </Button>
    </div>
  )
}
