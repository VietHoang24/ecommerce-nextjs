"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Check } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/atoms/status-badge"
import { PriceDisplay } from "@/components/atoms/price-display"
import { useAuth } from "@/components/providers/auth-provider"
import { useCart } from "@/components/providers/cart-provider"
import { LoginRequiredDialog } from "./login-required-dialog"
import { cn } from "@/lib/utils"

export interface ServicePlan {
  id: string
  name: string
  duration: string
  price: number
}

export interface Service {
  id: string
  name: string
  image: string
  description: string
  plans: ServicePlan[]
  available: boolean
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { user } = useAuth()
  const { addItem, items } = useCart()
  const [selectedPlan, setSelectedPlan] = useState<ServicePlan>(service.plans[0])
  const [showLoginDialog, setShowLoginDialog] = useState(false)

  const isInCart = items.some((item) => item.id === `${service.id}-${selectedPlan.id}`)

  const handleAddToCart = () => {
    if (!user) {
      setShowLoginDialog(true)
      return
    }

    if (!service.available || isInCart) return

    addItem({
      id: `${service.id}-${selectedPlan.id}`,
      serviceId: service.id,
      serviceName: service.name,
      serviceImage: service.image,
      planName: selectedPlan.name,
      planDuration: selectedPlan.duration,
      price: selectedPlan.price,
    })
  }

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative aspect-video bg-muted">
            <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
            <div className="absolute top-2 right-2">
              <StatusBadge status={service.available ? "available" : "outOfStock"} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{service.name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{service.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full border transition-colors",
                  selectedPlan.id === plan.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50",
                )}
              >
                {plan.duration}
              </button>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <PriceDisplay amount={selectedPlan.price} size="lg" className="text-primary" />
          <Button onClick={handleAddToCart} disabled={!service.available || isInCart} size="sm" className="gap-2">
            {isInCart ? (
              <>
                <Check className="h-4 w-4" />
                Đã thêm
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                Thêm vào giỏ
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <LoginRequiredDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} />
    </>
  )
}
